# 🇯🇵 Japanese JLPT Learner – Complete Web App

**Japanese JLPT Learner** is a full-featured, interactive web application designed to help learners master the **JLPT N5 to N1 levels** through quizzes, downloadable study materials, progress tracking, and real-time feedback.

🎯 Built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no backend required.  
🚀 Perfect for self-learners, teachers, and developers.

---

## 🏷️ Made By
**Sanskar Hatwar**  
📧 Email: sanskarhatwar@example.com  
📱 Portfolio: https://sanskarhatwar.dev  
💼 GitHub: https://github.com/sanskarhatwar

> "Empowering language learners with technology."

---

## 🌟 Features

### 🔐 **User Authentication**
- Secure login & registration
- Email verification (simulated with verification link)
- Password reset flow
- Session management using `localStorage`

### 📚 **Study Materials (N5–N1)**
- Downloadable PDFs for each level:
  - Grammar
  - Vocabulary
  - Kanji
- Level-specific content (no repetition)
- Real, free JLPT study guides from trusted sources

### 🧠 **Interactive Quizzes**
- **Level Quizzes (N5–N1)**:
  - Select level → Click "Start Quiz"
  - Questions **shuffled randomly**
  - Timer starts on quiz start
  - Green border highlights selected answer
- **Daily Challenge Quiz**:
  - 100 mixed questions from N5 to N1
  - Only for verified users
  - Progress bar shows completion
- **Results Page**:
  - Score display (e.g., `78 / 80`)
  - Time taken shown
  - Feedback: "🎉 Master Level!" or "📚 Keep practicing!"
  - Review with correct/incorrect answers and explanations

### 🎯 **Learning Flow**
1. Login → Dashboard
2. Click **Study** → Download PDFs
3. Click **Quiz** → Select level → Start Quiz
4. Answer → Submit → See results

### 📊 **Progress & Motivation**
- Login streak counter
- Level progress bars
- Encouraging feedback based on score

---

## 📁 File Structure
japanese-jlpt-learner/
│
├── index.html # Login page
├── register.html # Registration
├── verify.html # Email verification
├── forgot-password.html # Password reset request
├── reset-password.html # Set new password
├── dashboard.html # Main dashboard with study & quiz
├── study-materials.html # Dynamic PDF download by level
├── quiz.html # Level quiz with timer & shuffle
├── daily-quiz.html # 100 mixed questions (N5-N1)
├── result.html # Quiz results with time & review
├── result-daily.html # Daily quiz results
│
├── css/
│ └── style.css # Styling for all pages
│
├── js/
│ ├── app.js # User auth, session, navigation
│ └── quiz-data.js # 200+ quiz questions (N5-N1)
│
├── pdfs/ # 15 real JLPT PDFs
│ ├── N5-Grammar.pdf
│ ├── N5-Vocabulary.pdf
│ ├── N5-Kanji.pdf
│ ├── N4-Grammar.pdf
│ ├── N4-Vocabulary.pdf
│ ├── N4-Kanji.pdf
│ ├── N3-Grammar.pdf
│ ├── N3-Vocabulary.pdf
│ ├── N3-Kanji.pdf
│ ├── N2-Grammar.pdf
│ ├── N2-Vocabulary.pdf
│ ├── N2-Kanji.pdf
│ ├── N1-Grammar.pdf
│ ├── N1-Vocabulary.pdf
│ └── N1-Kanji.pdf
│
└── README.md # This file


---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Styling** | Custom CSS + Google Fonts (Noto Sans JP) |
| **Data** | `localStorage` (no backend) |
| **Quiz Engine** | Dynamic rendering, Fisher-Yates shuffle, timer |
| **Responsive** | Works on mobile & desktop |
| **Fonts** | [Noto Sans JP](https://fonts.google.com/specimen/Noto+Sans+JP) |

---

## 📦 Requirements

### 💻 Software
- Web browser (Chrome, Firefox, Edge, Safari)
- Text editor (VS Code, Sublime, etc.)
- Terminal (Command Prompt, PowerShell, or VS Code Terminal)

### ⚙️ Tools
- `http-server` (for local testing)

### 📦 Install Dependencies
```bash
npm install -g http-server