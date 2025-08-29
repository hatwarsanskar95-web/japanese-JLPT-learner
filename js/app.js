class JapaneseApp {
  constructor() {
    this.users = JSON.parse(localStorage.getItem('jlptUsers')) || [];
    this.currentUser = null;
    this.init();
  }

  init() {
    this.restoreSession();
    this.bindEvents();
    this.updateUI();
  }

  bindEvents() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    if (registerForm) registerForm.addEventListener('submit', (e) => this.handleRegister(e));
  }

  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const errorEl = document.getElementById('loginError');
    errorEl.textContent = '';

    if (!this.isValidEmail(email)) {
      errorEl.textContent = '❌ Please enter a valid email.';
      return;
    }

    const user = this.users.find(u => u.email === email);
    if (!user) {
      errorEl.textContent = '❌ No account found with this email.';
      return;
    }

    if (!user.verified) {
      errorEl.innerHTML = '📧 Please verify your email first. Check your inbox.';
      return;
    }

    if (user.password !== password) {
      errorEl.textContent = '❌ Incorrect password.';
      return;
    }

    this.currentUser = user;
    localStorage.setItem('jlptCurrentUser', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  }

  handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorEl = document.getElementById('registerError');
    errorEl.textContent = '';

    if (!this.isValidEmail(email)) {
      errorEl.textContent = '❌ Invalid email format.';
      return;
    }

    if (password.length < 6) {
      errorEl.textContent = '❌ Password must be at least 6 characters.';
      return;
    }

    if (password !== confirmPassword) {
      errorEl.textContent = '❌ Passwords do not match.';
      return;
    }

    if (this.users.some(u => u.email === email)) {
      errorEl.textContent = '❌ This email is already registered.';
      return;
    }

    const verificationToken = Math.random().toString(36).substr(2, 9);
    const newUser = {
      id: Date.now(),
      username,
      email,
      password,
      verificationToken,
      verified: false
    };

    this.users.push(newUser);
    localStorage.setItem('jlptUsers', JSON.stringify(this.users));
    this.simulateSendEmail(newUser);
  }

  simulateSendEmail(user) {
    const errorEl = document.getElementById('registerError');
    const verifyLink = `http://localhost:8080/verify.html?email=${encodeURIComponent(user.email)}&token=${user.verificationToken}`;

    errorEl.innerHTML = `
      📧 <strong>Verification email sent!</strong><br>
      We've sent a link to <strong>${user.email}</strong>.<br>
      <small>Click the link in your inbox to verify.</small><br><br>
      <strong>Simulate inbox:</strong><br>
      <a href="${verifyLink}" target="_blank" style="color:#0077b6; text-decoration:underline;">
        🔗 Click to verify email
      </a>
    `;
    alert(`📬 Verification link would be sent to ${user.email}\nClick the link in 'Simulate inbox' to continue.`);
  }

  restoreSession() {
    this.currentUser = JSON.parse(localStorage.getItem('jlptCurrentUser'));
  }

  updateUI() {
    const usernameEl = document.querySelector('.navbar .user-info .username');
    const streakEl = document.querySelector('.navbar .streak');
    if (this.currentUser && usernameEl) usernameEl.textContent = this.currentUser.username;
    if (streakEl) this.updateStreak(streakEl);
  }

  updateStreak(el) {
    const key = 'jlptStreak';
    const today = new Date().toDateString();
    let streak = JSON.parse(localStorage.getItem(key)) || { lastLogin: null, count: 0 };
    if (streak.lastLogin !== today) {
      streak.count = streak.lastLogin ? streak.count + 1 : 1;
      streak.lastLogin = today;
      localStorage.setItem(key, JSON.stringify(streak));
    }
    el.textContent = `🔥 ${streak.count}-day streak`;
  }

  goTo(page) {
    window.location.href = page;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.JLPTApp = new JapaneseApp();
});