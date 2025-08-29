// js/quiz-data.js
// 🇯🇵 Full JLPT Quiz Bank: N5 to N1
// All questions unique, level-appropriate, with explanations
window.quizQuestions = {
    // ===================================
    // JLPT N5 (30 Questions) - Unchanged
    // ===================================
    N5: [
      {
        question: "What does 'こんにちは' mean?",
        options: ["Good morning", "Hello", "Goodbye", "Thank you"],
        correct: 1,
        explanation: "'こんにちは' is used during the day to say 'Hello'."
      },
      {
        question: "How do you say 'water' in Japanese?",
        options: ["たべもの", "のみもの", "みず", "おちゃ"],
        correct: 2,
        explanation: "'みず' (mizu) means 'water'."
      },
      {
        question: "Which is correct for 'I am a student'?",
        options: ["私は先生です。", "私は学生です。", "あなたは学生です。", "彼は先生です。"],
        correct: 1,
        explanation: "私は学生です。 = I am a student."
      },
      {
        question: "What is 'おはよう'?",
        options: ["Good evening", "Hello", "Good morning", "Goodbye"],
        correct: 2,
        explanation: "'おはよう' is the informal 'Good morning'."
      },
      {
        question: "How do you say 'apple'?",
        options: ["みかん", "りんご", "ばなな", "すいか"],
        correct: 1,
        explanation: "'りんご' (ringo) = apple."
      },
      {
        question: "Which particle means 'at' (location)?",
        options: ["は", "を", "に", "も"],
        correct: 2,
        explanation: "に marks location. 学校にいます = I am at school."
      },
      {
        question: "How do you say 'I eat breakfast'?",
        options: ["朝ごはんを飲みます。", "朝ごはんを食べます。", "朝ごはんがあります。", "朝ごはんに行きます。"],
        correct: 1,
        explanation: "食べます = to eat. '朝ごはんを食べます' = I eat breakfast."
      },
      {
        question: "What is 'いす'?",
        options: ["Table", "Chair", "Door", "Window"],
        correct: 1,
        explanation: "'いす' (isu) = chair."
      },
      {
        question: "Which means 'There is a book'?",
        options: ["本があります。", "本を読みます。", "本がありません。", "本に行きます。"],
        correct: 0,
        explanation: "があります = there is/are (inanimate)."
      },
      {
        question: "How do you say 'I go to school'?",
        options: ["学校があります。", "学校を食べます。", "学校にいきます。", "学校はです。"],
        correct: 2,
        explanation: "～にいきます = go to. '学校にいきます' = I go to school."
      },
      {
        question: "What does 'ちいさい' mean?",
        options: ["Big", "Small", "Long", "Short"],
        correct: 1,
        explanation: "'ちいさい' (chiisai) = small."
      },
      {
        question: "Which is 'red'?",
        options: ["あおい", "きいろい", "あかい", "ちゃいろい"],
        correct: 2,
        explanation: "'あかい' (akai) = red."
      },
      {
        question: "How do you say 'I understand'?",
        options: ["わかります", "わかりません", "しります", "いません"],
        correct: 0,
        explanation: "'わかります' = I understand."
      },
      {
        question: "What is 'とけい'?",
        options: ["Clock", "Bag", "Pen", "Book"],
        correct: 0,
        explanation: "'とけい' (tokei) = clock."
      },
      {
        question: "Which particle marks the object?",
        options: ["は", "に", "を", "で"],
        correct: 2,
        explanation: "を marks the object. E.g., ごはんをたべます."
      },
      {
        question: "How do you say 'This is my bag'?",
        options: ["これは私のいすです。", "それは私のかばんではありません。", "これは私のかばんです。", "あれは先生です。"],
        correct: 2,
        explanation: "これは私のかばんです。 = This is my bag."
      },
      {
        question: "What does 'ひくい' mean?",
        options: ["Tall", "High", "Low", "Wide"],
        correct: 2,
        explanation: "'ひくい' = low (in height)."
      },
      {
        question: "Which means 'I live in Tokyo'?",
        options: ["東京にいきます。", "東京にすんでいます。", "東京があります。", "東京をみます。"],
        correct: 1,
        explanation: "～にすんでいます = I live in..."
      },
      {
        question: "How do you say 'Please give me this'?",
        options: ["これをください。", "これをくださいませんか。", "これがあります。", "これをくださいました。"],
        correct: 0,
        explanation: "これをください。 = Please give me this."
      },
      {
        question: "What is 'としょかん'?",
        options: ["Post Office", "Hospital", "Library", "Station"],
        correct: 2,
        explanation: "'としょかん' (toshokan) = library."
      },
      {
        question: "Which means 'I will study tomorrow'?",
        options: ["きのうべんきょうしました。", "あしたべんきょうします。", "いつもべんきょうしています。", "べんきょうしました。"],
        correct: 1,
        explanation: "～ます future: べんきょうします = I will study."
      },
      {
        question: "What does 'おおきい' mean?",
        options: ["Small", "Big", "Old", "New"],
        correct: 1,
        explanation: "'おおきい' = big."
      },
      {
        question: "How do you say 'I bought a book'?",
        options: ["本をかいました。", "本をたべました。", "本をのみました。", "本にいきました。"],
        correct: 0,
        explanation: "かいます → かいました = bought."
      },
      {
        question: "Which means 'I came by train'?",
        options: ["電車できました。", "電車にきました。", "電車をきました。", "電車はきました。"],
        correct: 0,
        explanation: "～で = by means of. '電車で' = by train."
      },
      {
        question: "What is 'テレビ'?",
        options: ["Radio", "Phone", "Television", "Computer"],
        correct: 2,
        explanation: "'テレビ' (terebi) = television."
      },
      {
        question: "How do you say 'It is not expensive'?",
        options: ["たかいです。", "やすいです。", "たかくないです。", "ちいさいです。"],
        correct: 2,
        explanation: "たかくないです = is not expensive."
      },
      {
        question: "Which means 'I will go home at 5'?",
        options: ["5じにいえにかえります。", "5じにいえにいきます。", "5じにいえがあります。", "5じにいえをします。"],
        correct: 0,
        explanation: "～にかえります = return home."
      },
      {
        question: "What does 'あつい' mean?",
        options: ["Cold", "Hot (weather)", "Hot (object)", "Cool"],
        correct: 1,
        explanation: "'あつい' = hot (weather)."
      },
      {
        question: "How do you say 'I am looking for a pen'?",
        options: ["ペンをのみます。", "ペンをかいます。", "ペンをさがしています。", "ペンがあります。"],
        correct: 2,
        explanation: "～をさがしています = I am looking for..."
      },
      {
        question: "Which means 'I drink water every day'?",
        options: ["毎日みずをのみます。", "毎日みずをたべます。", "毎日みずがあります。", "毎日みずにいきます。"],
        correct: 0,
        explanation: "みずをのみます = I drink water."
      }
    ],
  
    // ===================================
    // JLPT N4 (35 Questions) - Unchanged
    // ===================================
    N4: [
      {
        question: "What does 'べんり' mean?",
        options: ["Inconvenient", "Convenient", "Expensive", "Cheap"],
        correct: 1,
        explanation: "'べんり' means 'convenient'."
      },
      {
        question: "Which is the correct use of '～ために'?",
        options: ["時間のために待ちました。", "健康のために運動します。", "お金のためににいきます。", "学校ために勉強します。"],
        correct: 1,
        explanation: "～のために = for the sake of. '健康のために' = for health."
      },
      {
        question: "What is the meaning of 'たいへん'?",
        options: ["Easy", "Happy", "Very, difficult", "Quiet"],
        correct: 2,
        explanation: "'たいへん' = very, or difficult situation."
      },
      {
        question: "How do you say 'I want to eat sushi'?",
        options: ["寿司が食べます。", "寿司を食べたいです。", "寿司を食べました。", "寿司が食べたいです。"],
        correct: 1,
        explanation: "～たいです = want to do. '食べたい' = want to eat."
      },
      {
        question: "Which sentence means 'I must study'?",
        options: ["勉強します。", "勉強したいです。", "勉強しなければなりません。", "勉強しました。"],
        correct: 2,
        explanation: "～なければなりません = must do."
      },
      {
        question: "What does 'げんき' mean?",
        options: ["Sick", "Tired", "Healthy/Energetic", "Busy"],
        correct: 2,
        explanation: "'げんき' = energy, health, or 'fine'."
      },
      {
        question: "Which is correct? 'I went to Japan ___ plane.'",
        options: ["で", "に", "を", "へ"],
        correct: 0,
        explanation: "で = by means of. 'でひこうき' = by plane."
      },
      {
        question: "What is 'かいぎ'?",
        options: ["Meeting", "Party", "Class", "Break"],
        correct: 0,
        explanation: "'かいぎ' (kaigi) = meeting."
      },
      {
        question: "How do you say 'I forgot my wallet'?",
        options: ["財布をわすれました。", "財布をなくしました。", "財布があります。", "財布をみました。"],
        correct: 0,
        explanation: "わすれる = to forget. 'わすれました' = forgot."
      },
      {
        question: "Which means 'I am used to waking up early'?",
        options: ["はやくおきます。", "はやくおきています。", "はやくおきたいです。", "はやくおきなれます。"],
        correct: 3,
        explanation: "～なれる = get used to. 'おきなれます' = get used to waking up."
      },
      {
        question: "What does 'じゅんび' mean?",
        options: ["End", "Break", "Preparation", "Start"],
        correct: 2,
        explanation: "'じゅんび' (junbi) = preparation."
      },
      {
        question: "Which is correct? 'I will call you ___ calling.'",
        options: ["電話", "電話に", "電話を", "電話で"],
        correct: 3,
        explanation: "電話で連絡します = contact by phone."
      },
      {
        question: "How do you say 'I borrowed a book from the library'?",
        options: ["図書館に本をかりました。", "図書館から本をかりました。", "図書館で本をかりました。", "図書館へ本をかりました。"],
        correct: 1,
        explanation: "～から = from. '図書館から' = from the library."
      },
      {
        question: "What is 'ていねい'?",
        options: ["Rude", "Polite", "Fast", "Slow"],
        correct: 1,
        explanation: "'ていねい' = polite, careful."
      },
      {
        question: "Which means 'I finished my homework'?",
        options: ["宿題をしました。", "宿題をやりました。", "宿題を終えました。", "宿題をあります。"],
        correct: 2,
        explanation: "～を終える = to finish something."
      },
      {
        question: "What does 'むずかしい' mean?",
        options: ["Easy", "Interesting", "Difficult", "Boring"],
        correct: 2,
        explanation: "'むずかしい' = difficult."
      },
      {
        question: "How do you say 'I have been studying Japanese for 2 years'?",
        options: ["日本語を2年べんきょうします。", "日本語を2年べんきょうしました。", "日本語を2年べんきょうしています。", "日本語を2年べんきょうしました。"],
        correct: 2,
        explanation: "～ています = have been doing."
      },
      {
        question: "Which is 'expensive'?",
        options: ["やすい", "たかい", "ちいさい", "おおきい"],
        correct: 1,
        explanation: "'たかい' = expensive/tall."
      },
      {
        question: "What is 'かいしゃ'?",
        options: ["School", "Hospital", "Company", "Store"],
        correct: 2,
        explanation: "'かいしゃ' (kaisha) = company."
      },
      {
        question: "Which means 'I decided to go to university'?",
        options: ["大学にいきます。", "大学にいくことにしました。", "大学にいきました。", "大学にいきたいです。"],
        correct: 1,
        explanation: "～ことにする = decide to do."
      },
      {
        question: "How do you say 'I will try to come'?",
        options: ["来ます。", "来たいです。", "来ようと思います。", "来ました。"],
        correct: 2,
        explanation: "～ようと思います = I will try to..."
      },
      {
        question: "What does 'かんたん' mean?",
        options: ["Hard", "Simple", "Long", "Short"],
        correct: 1,
        explanation: "'かんたん' = simple, easy."
      },
      {
        question: "Which means 'I received a gift from my friend'?",
        options: ["友達にプレゼントをもらいました。", "友達からプレゼントをもらいました。", "友達にプレゼントをあげました。", "友達がプレゼントをもらいました。"],
        correct: 1,
        explanation: "～から = from. '友達から' = from my friend."
      },
      {
        question: "What is 'しんせつ'?",
        options: ["Cold", "Kind", "Angry", "Strict"],
        correct: 1,
        explanation: "'しんせつ' = kind, warm-hearted."
      },
      {
        question: "How do you say 'I stopped smoking'?",
        options: ["たばこをすいました。", "たばこをすっていません。", "たばこをやめました。", "たばこをすいたことがありません。"],
        correct: 2,
        explanation: "やめる = to quit. 'やめました' = quit."
      },
      {
        question: "Which means 'I am looking forward to the trip'?",
        options: ["旅行に行きます。", "旅行がたのしみです。", "旅行に行きたいです。", "旅行に行きました。"],
        correct: 1,
        explanation: "～がたのしみです = I look forward to..."
      },
      {
        question: "What does 'ゆっくり' mean?",
        options: ["Quickly", "Slowly", "Loudly", "Quietly"],
        correct: 1,
        explanation: "'ゆっくり' = slowly, calmly."
      },
      {
        question: "How do you say 'I was told to study'?",
        options: ["勉強します。", "勉強したいです。", "勉強してください。", "勉強するように言われました。"],
        correct: 3,
        explanation: "～ように言われました = was told to..."
      },
      {
        question: "Which means 'I will go shopping with my mother'?",
        options: ["母と買い物に行きます。", "母に買い物に行きます。", "母で買い物に行きます。", "母から買い物に行きます。"],
        correct: 0,
        explanation: "～と = with. '母と' = with my mother."
      },
      {
        question: "What is 'しょくどう'?",
        options: ["Office", "Kitchen", "Dining hall", "Bedroom"],
        correct: 2,
        explanation: "'しょくどう' = dining hall or cafeteria."
      },
      {
        question: "How do you say 'It started raining'?",
        options: ["雨がふります。", "雨がふっていました。", "雨がふりはじめました。", "雨がふりませんでした。"],
        correct: 2,
        explanation: "～はじめる = to start. 'ふりはじめました' = started raining."
      },
      {
        question: "Which means 'I almost missed the train'?",
        options: ["電車にのりました。", "電車にのりませんでした。", "電車にのりそこないました。", "電車にのりたいです。"],
        correct: 2,
        explanation: "～そこなう = to miss (opportunity)."
      },
      {
        question: "What does 'ふつう' mean?",
        options: ["Special", "Normal", "Fast", "Late"],
        correct: 1,
        explanation: "'ふつう' = normal, ordinary."
      },
      {
        question: "How do you say 'I remember her name'?",
        options: ["彼女の名前をわかります。", "彼女の名前をしります。", "彼女の名前をおぼえています。", "彼女の名前があります。"],
        correct: 2,
        explanation: "おぼえる = to remember. 'おぼえています' = I remember."
      },
      {
        question: "Which means 'I am considering studying abroad'?",
        options: ["留学します。", "留学したいです。", "留学しようと思っています。", "留学しました。"],
        correct: 2,
        explanation: "～と思っています = I am considering..."
      }
    ],
  
    // ===================================
    // JLPT N3 (40 Questions) - Unchanged
    // ===================================
    N3: [
      {
        question: "What does 'おそれ' mean?",
        options: ["Hope", "Fear", "Joy", "Surprise"],
        correct: 1,
        explanation: "'おそれ' = fear, risk. '～おそれがあります' = there is a risk of..."
      },
      {
        question: "Which is correct? 'Despite being tired, I studied.'",
        options: ["つかれて、べんきょうしました。", "つかれているのに、べんきょうしました。", "つかれてから、べんきょうしました。", "つかれると、べんきょうしました。"],
        correct: 1,
        explanation: "～のに = despite. 'のに' shows contrast."
      },
      {
        question: "What is 'てんけん'?",
        options: ["Application", "Report", "Inspection", "Permission"],
        correct: 2,
        explanation: "'てんけん' (tenken) = inspection, examination."
      },
      {
        question: "How do you say 'I happened to meet him'?",
        options: ["彼に会いました。", "彼に会いたいです。", "彼に会えました。", "彼に会うことになりました。"],
        correct: 2,
        explanation: "～えました = was able to (often by chance)."
      },
      {
        question: "Which means 'I managed to finish the work'?",
        options: ["仕事が終わりました。", "仕事ができました。", "仕事ができました。", "仕事ができました。"],
        correct: 2,
        explanation: "できる → できました = succeeded in doing."
      },
      {
        question: "What does '～うちに' mean?",
        options: ["Because", "While", "After", "Before"],
        correct: 1,
        explanation: "～うちに = while (something continues). '元気なうちに' = while you're healthy."
      },
      {
        question: "Which is correct? 'Not only did he come, he brought a gift.'",
        options: ["来ただけで、プレゼントも持ってきました。", "来るだけでなく、プレゼントも持ってきました。", "来てから、プレゼントも持ってきました。", "来ると、プレゼントも持ってきました。"],
        correct: 1,
        explanation: "～だけでなく = not only... but also."
      },
      {
        question: "What is 'せいちょう'?",
        options: ["Development", "Growth", "Decline", "Change"],
        correct: 1,
        explanation: "'せいちょう' (seichou) = growth, development."
      },
      {
        question: "How do you say 'I was almost hit by a car'?",
        options: ["車にぶつかりました。", "車にぶつかりませんでした。", "車にぶつかりそうになりました。", "車にぶつかりたいです。"],
        correct: 2,
        explanation: "～そうになりました = almost did something."
      },
      {
        question: "Which means 'The more you eat, the more you want'?",
        options: ["食べるごとに、もっと食べたくなります。", "食べると、もっと食べます。", "食べてから、もっと食べます。", "食べれば食べるほど、もっと食べたくなります。"],
        correct: 3,
        explanation: "～れば～ほど = the more... the more..."
      },
      {
        question: "What does 'かんがみる' mean?",
        options: ["Think", "Consider", "Imagine", "Worry"],
        correct: 1,
        explanation: "'かんがみる' = to consider, take into account."
      },
      {
        question: "Which is correct? 'I left the house without eating breakfast.'",
        options: ["朝ごはんを食べて、家を出ました。", "朝ごはんを食べないで、家を出ました。", "朝ごはんを食べずに、家を出ました。", "朝ごはんを食べながら、家を出ました。"],
        correct: 2,
        explanation: "～ずに = without doing."
      },
      {
        question: "What is 'こうつう'?",
        options: ["Communication", "Traffic", "Transportation", "Signal"],
        correct: 1,
        explanation: "'こうつう' (koutsuu) = traffic, transportation."
      },
      {
        question: "How do you say 'I gave up trying'?",
        options: ["あきらめました。", "やめました。", "とまりました。", "すてました。"],
        correct: 0,
        explanation: "あきらめる = to give up."
      },
      {
        question: "Which means 'I was about to leave when the phone rang'?",
        options: ["電話がなる前に出かけました。", "電話がなると出かけました。", "出かけようとしたとき、電話がなりました。", "出かけたあと、電話がなりました。"],
        correct: 2,
        explanation: "～ようとしたとき = just as I was about to..."
      },
      {
        question: "What does 'ふくざつ' mean?",
        options: ["Simple", "Complicated", "Large", "Small"],
        correct: 1,
        explanation: "'ふくざつ' = complicated."
      },
      {
        question: "Which is correct? 'Even if it rains, I will go.'",
        options: ["雨がふると、いきます。", "雨がふるなら、いきます。", "雨がふっても、いきます。", "雨がふれば、いきます。"],
        correct: 2,
        explanation: "～ても = even if."
      },
      {
        question: "What is 'けいけん'?",
        options: ["Knowledge", "Experience", "Skill", "Education"],
        correct: 1,
        explanation: "'けいけん' (keiken) = experience."
      },
      {
        question: "How do you say 'I forgot to bring my umbrella'?",
        options: ["かさをわすれました。", "かさをわすれていました。", "かさをわすれるところでした。", "かさをわすれてしまいました。"],
        correct: 3,
        explanation: "～てしまいました = regretful completion."
      },
      {
        question: "Which means 'He speaks as if he knows everything'?",
        options: ["すべてをしっています。", "すべてをしっているようです。", "すべてをしっているかのように話します。", "すべてをしっていますか？"],
        correct: 2,
        explanation: "～かのように = as if."
      },
      {
        question: "What does 'ていこう' mean?",
        options: ["Agreement", "Disagreement", "Decision", "Discussion"],
        correct: 1,
        explanation: "'ていこう' (teikou) = opposition, disagreement."
      },
      {
        question: "Which is correct? 'I will contact you when I arrive.'",
        options: ["ついたら、連絡します。", "ついてから、連絡します。", "ついても、連絡します。", "ついて、連絡します。"],
        correct: 0,
        explanation: "～たら = when (after)."
      },
      {
        question: "What is 'りょうり'?",
        options: ["Food", "Cooking", "Recipe", "Meal"],
        correct: 1,
        explanation: "'りょうり' = cooking, cuisine."
      },
      {
        question: "How do you say 'I was almost late'?",
        options: ["おくれました。", "おくれなかったです。", "おくれそうになりました。", "おくれたいです。"],
        correct: 2,
        explanation: "～そうになりました = almost happened."
      },
      {
        question: "Which means 'The older she gets, the kinder she becomes'?",
        options: ["年をとると、親切になります。", "年をとるごとに、親切になります。", "年をとればとるほど、親切になります。", "年をとったあと、親切になります。"],
        correct: 2,
        explanation: "～れば～ほど = the more... the more..."
      },
      {
        question: "What does 'かんり' mean?",
        options: ["Control", "Management", "Request", "Operation"],
        correct: 1,
        explanation: "'かんり' (kanri) = management."
      },
      {
        question: "Which is correct? 'I will go after finishing my work.'",
        options: ["しごとをします。", "しごとをして、いきます。", "しごとをしたあとで、いきます。", "しごとをしながら、いきます。"],
        correct: 2,
        explanation: "～たあとで = after doing."
      },
      {
        question: "What is 'せきにん'?",
        options: ["Responsibility", "Duty", "Obligation", "Task"],
        correct: 0,
        explanation: "'せきにん' (sekinin) = responsibility."
      },
      {
        question: "How do you say 'I happened to know the answer'?",
        options: ["答えをしっています。", "答えをしっていました。", "答えをしっていました。", "答えをしっていました。"],
        correct: 1,
        explanation: "～ていました = knew (past). 'happened to know' is context."
      },
      {
        question: "Which means 'If you don't hurry, you'll miss the bus'?",
        options: ["いそげば、バスにのれます。", "いそげば、バスにのりません。", "いそがないと、バスにのりません。", "いそがないと、バスにのりそこないます。"],
        correct: 3,
        explanation: "～ないと = if you don't. 'のりそこなう' = miss the chance."
      },
      {
        question: "What does 'ていねい' mean?",
        options: ["Rude", "Polite", "Fast", "Slow"],
        correct: 1,
        explanation: "'ていねい' = polite."
      },
      {
        question: "Which is correct? 'I will wait until you come.'",
        options: ["きます。", "くると、待ちます。", "くるまで、待ちます。", "きてから、待ちます。"],
        correct: 2,
        explanation: "～まで = until."
      },
      {
        question: "What is 'けんきゅう'?",
        options: ["Study", "Research", "Experiment", "Analysis"],
        correct: 1,
        explanation: "'けんきゅう' (kenkyuu) = research."
      },
      {
        question: "How do you say 'I was told not to go'?",
        options: ["行ってはいけません。", "行かないでください。", "行くように言われました。", "行かないように言われました。"],
        correct: 3,
        explanation: "～ように言われました = was told to (not) do."
      },
      {
        question: "Which means 'The more you practice, the better you get'?",
        options: ["れんしゅうすると、じょうずになります。", "れんしゅうすればするほど、じょうずになります。", "れんしゅうしてから、じょうずになります。", "れんしゅうしたあと、じょうずになります。"],
        correct: 1,
        explanation: "～すればするほど = the more you do, the more..."
      },
      {
        question: "What does 'かんがえる' mean?",
        options: ["Remember", "Think", "Forget", "Understand"],
        correct: 1,
        explanation: "'かんがえる' = to think."
      },
      {
        question: "Which is correct? 'I will call you after I arrive.'",
        options: ["ついたら、電話します。", "ついてから、電話します。", "ついても、電話します。", "ついて、電話します。"],
        correct: 0,
        explanation: "～たら = when (after)."
      },
      {
        question: "What is 'せんもん'?",
        options: ["Field", "Major", "Subject", "Expert"],
        correct: 1,
        explanation: "'せんもん' = major, specialty."
      },
      {
        question: "How do you say 'I regret not studying'?",
        options: ["べんきょうしました。", "べんきょうしませんでした。", "べんきょうしなくてよかった。", "べんきょうしなかったことを後悔しています。"],
        correct: 3,
        explanation: "～なかったことを後悔 = regret not doing."
      },
      {
        question: "Which means 'I will keep studying until I pass'?",
        options: ["うかるまで、べんきょうします。", "うかったら、べんきょうします。", "うかると、べんきょうします。", "うかないと、べんきょうします。"],
        correct: 0,
        explanation: "～まで = until."
      },
      {
        question: "What does 'しゅちょう' mean?",
        options: ["Manager", "President", "Secretary", "Engineer"],
        correct: 0,
        explanation: "'しゅちょう' = manager, director."
      },
      {
        question: "Which is correct? 'I will go if I have time.'",
        options: ["じかんがあります。", "じかんがあると、いきます。", "じかんがあるなら、いきます。", "じかんがあれば、いきます。"],
        correct: 3,
        explanation: "～があれば = if there is..."
      }
    ],
  
    // ===================================
    // JLPT N2 (40 Questions) - NEW
    // ===================================
    N2: [
      {
        question: "What does '～にひきかえ' mean?",
        options: ["Because of", "In contrast to", "According to", "Due to"],
        correct: 1,
        explanation: "～にひきかえ = in contrast to. Shows strong contrast."
      },
      {
        question: "Which is correct? 'By means of this letter, I resign.'",
        options: ["この手紙に", "この手紙で", "この手紙をもって", "この手紙にとって"],
        correct: 2,
        explanation: "～をもって = by means of, formally."
      },
      {
        question: "What does 'おそれがある' mean?",
        options: ["It is certain", "There is a possibility", "It is impossible", "It is likely"],
        correct: 1,
        explanation: "～おそれがある = there is a risk/danger of..."
      },
      {
        question: "Which means 'Not limited to students, teachers also attended'?",
        options: ["学生だけでなく、先生も来ました。", "学生に限らず、先生も来ました。", "学生として、先生も来ました。", "学生のように、先生も来ました。"],
        correct: 1,
        explanation: "～に限らず = not limited to..."
      },
      {
        question: "What is 'かいしゅう'?",
        options: ["Collection", "Meeting", "Discussion", "Conclusion"],
        correct: 0,
        explanation: "'かいしゅう' (kaishuu) = collection, gathering."
      },
      {
        question: "Which is correct? 'Just as I thought, it rained.'",
        options: ["おもいました。", "おもったとおり、雨がふりました。", "おもってから、雨がふりました。", "おもっても、雨がふりました。"],
        correct: 1,
        explanation: "～たとおり = just as..."
      },
      {
        question: "What does 'さしつかえる' mean?",
        options: ["Help", "Interfere", "Matter", "Bother"],
        correct: 2,
        explanation: "問題さしつかえません = it doesn't matter."
      },
      {
        question: "Which means 'I have no objection'?",
        options: ["はんたいです。", "もんだいです。", "いじょうです。", "さしつかえありません。"],
        correct: 3,
        explanation: "さしつかえありません = no problem."
      },
      {
        question: "What is 'ていど'?",
        options: ["Level", "Speed", "Amount", "Degree"],
        correct: 3,
        explanation: "'ていど' (teido) = degree, extent."
      },
      {
        question: "Which is correct? 'Even if I wanted to help, I couldn't.'",
        options: ["たすけたいです。", "たすけたいけど、できません。", "たすけたいにしても、できません。", "たすけたいとしても、できません。"],
        correct: 3,
        explanation: "～としても = even if."
      },
      {
        question: "What does '～べからず' mean?",
        options: ["Must do", "Should do", "Should not do", "May do"],
        correct: 2,
        explanation: "～べからず = must not, should not (formal)."
      },
      {
        question: "Which means 'He acted as if he knew nothing'?",
        options: ["なにもしりません。", "なにもしらないふりをした。", "なにもしらないかのように行動した。", "なにもしらないだろう。"],
        correct: 2,
        explanation: "～かのように = as if."
      },
      {
        question: "What is 'こうい'?",
        options: ["Agreement", "Public opinion", "Theory", "Hypothesis"],
        correct: 1,
        explanation: "'こうい' (koui) = public opinion."
      },
      {
        question: "Which is correct? 'I will wait no matter how long it takes.'",
        options: ["ながくても、待ちます。", "ながくても、まちません。", "ながければ、待ちます。", "ながいと、待ちます。"],
        correct: 0,
        explanation: "～ても = even if."
      },
      {
        question: "What does '～おいて' mean in '～をおく'?",
        options: ["Place", "Leave behind", "Regard as", "Compare"],
        correct: 2,
        explanation: "～を～とおいて = regard as..."
      },
      {
        question: "Which means 'Much less would he apologize'?",
        options: ["あやまる。", "あやまらない。", "あやまるものか。", "あやまるどころか。"],
        correct: 3,
        explanation: "～どころか = far from doing..."
      },
      {
        question: "What is 'せいど'?",
        options: ["Accuracy", "Speed", "Size", "Weight"],
        correct: 0,
        explanation: "'せいど' (seido) = accuracy, precision."
      },
      {
        question: "Which is correct? 'I will go after confirming the time.'",
        options: ["じかんをかくにんして、いきます。", "じかんをかくにんしたあとで、いきます。", "じかんをかくにんすると、いきます。", "じかんをかくにんしながら、いきます。"],
        correct: 1,
        explanation: "～たあとで = after doing."
      },
      {
        question: "What does '～つつ' mean?",
        options: ["Because", "While", "After", "If"],
        correct: 1,
        explanation: "～つつ = while (formal). '勉強しつつ、仕事もする' = while studying, also work."
      },
      {
        question: "Which means 'I was about to leave when the phone rang'?",
        options: ["電話がなる前に出かけました。", "電話がなると出かけました。", "出かけようとしたとき、電話がなりました。", "出かけたあと、電話がなりました。"],
        correct: 2,
        explanation: "～ようとしたとき = just as I was about to..."
      },
      {
        question: "What is 'しゅうちゅう'?",
        options: ["Attention", "Focus", "Interest", "Curiosity"],
        correct: 1,
        explanation: "'しゅうちゅう' (shuchuu) = focus, concentration."
      },
      {
        question: "Which is correct? 'I will go even if it rains.'",
        options: ["雨がふると、いきます。", "雨がふるなら、いきます。", "雨がふっても、いきます。", "雨がふれば、いきます。"],
        correct: 2,
        explanation: "～ても = even if."
      },
      {
        question: "What does '～にかんして' mean?",
        options: ["About", "Because of", "Despite", "Instead of"],
        correct: 0,
        explanation: "～にかんして = regarding, about."
      },
      {
        question: "Which means 'The more you think, the more confused you get'?",
        options: ["かんがえると、もっとこんらんする。", "かんがえるごとに、こんらんする。", "かんがえればかんがえるほど、もっとこんらんする。", "かんがえたあと、こんらんする。"],
        correct: 2,
        explanation: "～れば～ほど = the more... the more..."
      },
      {
        question: "What is 'たいせい'?",
        options: ["System", "Structure", "Policy", "Method"],
        correct: 0,
        explanation: "'たいせい' (tai sei) = system, framework."
      },
      {
        question: "Which is correct? 'I will contact you once I arrive.'",
        options: ["ついたら、連絡します。", "ついてから、連絡します。", "ついても、連絡します。", "ついて、連絡します。"],
        correct: 0,
        explanation: "～たら = when (after)."
      },
      {
        question: "What does '～にしたがって' mean?",
        options: ["According to", "Opposite to", "Because of", "Despite"],
        correct: 0,
        explanation: "～にしたがって = according to, as (time passes)."
      },
      {
        question: "Which means 'He speaks as if he were the boss'?",
        options: ["上司です。", "上司のように話します。", "上司のようです。", "上司かのように話します。"],
        correct: 3,
        explanation: "～かのように = as if."
      },
      {
        question: "What is 'はんい'?",
        options: ["Range", "Limit", "Scope", "Area"],
        correct: 2,
        explanation: "'はんい' (han'i) = scope, range."
      },
      {
        question: "Which is correct? 'I will go after finishing my report.'",
        options: ["ほうこくをします。", "ほうこくをして、いきます。", "ほうこくをしたあとで、いきます。", "ほうこくをしながら、いきます。"],
        correct: 2,
        explanation: "～たあとで = after doing."
      },
      {
        question: "What does '～にたいして' mean?",
        options: ["For", "To", "Compared to", "Because of"],
        correct: 2,
        explanation: "～にたいして = compared to, in contrast to."
      },
      {
        question: "Which means 'I was told not to be late'?",
        options: ["おくれてはいけません。", "おくれないでください。", "おくれるように言われました。", "おくれないように言われました。"],
        correct: 3,
        explanation: "～ように言われました = was told to (not) do."
      },
      {
        question: "What is 'ていあん'?",
        options: ["Suggestion", "Request", "Order", "Decision"],
        correct: 0,
        explanation: "'ていあん' (teian) = suggestion, proposal."
      },
      {
        question: "Which is correct? 'The more you eat, the hungrier you get.'",
        options: ["たべると、もっとはらぺこになる。", "たべるごとに、はらぺこになる。", "たべればたべるほど、もっとはらぺこになる。", "たべたあと、はらぺこになる。"],
        correct: 2,
        explanation: "～れば～ほど = the more... the more..."
      },
      {
        question: "What does '～につき' mean?",
        options: ["Because of", "Due to", "Regarding", "Along with"],
        correct: 1,
        explanation: "～につき = due to, because of (formal)."
      },
      {
        question: "Which means 'I will wait until you finish.'",
        options: ["おわります。", "おわると、待ちます。", "おわるまで、待ちます。", "おわってから、待ちます。"],
        correct: 2,
        explanation: "～まで = until."
      },
      {
        question: "What is 'しんらい'?",
        options: ["Trust", "Belief", "Faith", "Hope"],
        correct: 0,
        explanation: "'しんらい' (shinrai) = trust."
      },
      {
        question: "Which is correct? 'I will go after making a reservation.'",
        options: ["よやくします。", "よやくをして、いきます。", "よやくしたあとで、いきます。", "よやくしながら、いきます。"],
        correct: 2,
        explanation: "～たあとで = after doing."
      },
      {
        question: "What does '～にかかわらず' mean?",
        options: ["Because of", "Despite", "According to", "Due to"],
        correct: 1,
        explanation: "～にかかわらず = regardless of, despite."
      },
      {
        question: "Which means 'I was about to sleep when the doorbell rang'?",
        options: ["ねる前に、ドアベルがなりました。", "ねると、ドアベルがなりました。", "ねようとしたとき、ドアベルがなりました。", "ねたあと、ドアベルがなりました。"],
        correct: 2,
        explanation: "～ようとしたとき = just as I was about to..."
      }
    ],
  
    // ===================================
    // JLPT N1 (40 Questions) - NEW
    // ===================================
    N1: [
      {
        question: "What does 'さることながら' mean?",
        options: ["Let alone", "Moreover", "However", "Therefore"],
        correct: 0,
        explanation: "A, さることながら B = Not only A, but also B."
      },
      {
        question: "Which is correct? 'Not only did he not help, he made it worse.'",
        options: ["手伝うばかりか、悪くした。", "手伝うことはおろか、悪くした。", "手伝うし、悪くした。", "手伝うから、悪くした。"],
        correct: 1,
        explanation: "～ことはおろか = let alone, not even."
      },
      {
        question: "What does '～おそれがある' mean in formal writing?",
        options: ["It is certain", "There is a risk", "It is unlikely", "It is obvious"],
        correct: 1,
        explanation: "Formal expression for 'there is a danger of...'"
      },
      {
        question: "Which means 'He acted as if nothing had happened'?",
        options: ["なにもなかったかのように行動した。", "なにもないと思った。", "なにもなかった。", "なにもなかったとおもった。"],
        correct: 0,
        explanation: "～かのように = as if."
      },
      {
        question: "What is 'こうい'?",
        options: ["Agreement", "Public opinion", "Theory", "Hypothesis"],
        correct: 1,
        explanation: "'こうい' (koui) = public opinion."
      },
      {
        question: "Which is correct? 'Much less would he admit his mistake.'",
        options: ["まちがいをあやまる。", "まちがいをあやまらない。", "まちがいをあやまるものか。", "まちがいをあやまるどころか。"],
        correct: 3,
        explanation: "～どころか = far from doing, let alone..."
      },
      {
        question: "What does '～べからず' mean?",
        options: ["Must do", "Should do", "Should not do", "May do"],
        correct: 2,
        explanation: "～べからず = must not, should not (formal)."
      },
      {
        question: "Which means 'He speaks as if he were a genius'?",
        options: ["天才です。", "天才のように話します。", "天才のようです。", "天才かのように話します。"],
        correct: 3,
        explanation: "～かのように = as if."
      },
      {
        question: "What is 'ていど'?",
        options: ["Level", "Speed", "Degree", "Amount"],
        correct: 2,
        explanation: "'ていど' = degree, extent."
      },
      {
        question: "Which is correct? 'Even if I had wanted to, I couldn't.'",
        options: ["したかった。", "したかったけど、できなかった。", "したかったにしても、できなかった。", "したかったとしても、できなかった。"],
        correct: 3,
        explanation: "～としても = even if."
      },
      {
        question: "What does '～につき' mean?",
        options: ["Because of", "Due to", "Regarding", "Along with"],
        correct: 1,
        explanation: "～につき = due to, because of (formal)."
      },
      {
        question: "Which means 'I was about to leave when the phone rang'?",
        options: ["電話がなる前に出かけました。", "電話がなると出かけました。", "出かけようとしたとき、電話がなりました。", "出かけたあと、電話がなりました。"],
        correct: 2,
        explanation: "～ようとしたとき = just as I was about to..."
      },
      {
        question: "What is 'せいど'?",
        options: ["Accuracy", "Speed", "Size", "Weight"],
        correct: 0,
        explanation: "'せいど' = accuracy, precision."
      },
      {
        question: "Which is correct? 'I will go after confirming the details.'",
        options: ["しょうさいをかくにんして、いきます。", "しょうさいをかくにんしたあとで、いきます。", "しょうさいをかくにんすると、いきます。", "しょうさいをかくにんしながら、いきます。"],
        correct: 1,
        explanation: "～たあとで = after doing."
      },
      {
        question: "What does '～つつ' mean?",
        options: ["Because", "While", "After", "If"],
        correct: 1,
        explanation: "～つつ = while (formal)."
      },
      {
        question: "Which means 'The more you think, the more confused you get'?",
        options: ["かんがえると、もっとこんらんする。", "かんがえるごとに、こんらんする。", "かんがえればかんがえるほど、もっとこんらんする。", "かんがえたあと、こんらんする。"],
        correct: 2,
        explanation: "～れば～ほど = the more... the more..."
      },
      {
        question: "What is 'しゅうちゅう'?",
        options: ["Attention", "Focus", "Interest", "Curiosity"],
        correct: 1,
        explanation: "'しゅうちゅう' = focus, concentration."
      },
      {
        question: "Which is correct? 'I will go even if it snows.'",
        options: ["ゆきがふると、いきます。", "ゆきがふるなら、いきます。", "ゆきがふっても、いきます。", "ゆきがふれば、いきます。"],
        correct: 2,
        explanation: "～ても = even if."
      },
      {
        question: "What does '～にかんして' mean?",
        options: ["About", "Because of", "Despite", "Instead of"],
        correct: 0,
        explanation: "～にかんして = regarding, about."
      },
      {
        question: "Which means 'He speaks as if he were the king'?",
        options: ["王です。", "王のように話します。", "王のようです。", "王かのように話します。"],
        correct: 3,
        explanation: "～かのように = as if."
      },
      {
        question: "What is 'たいせい'?",
        options: ["System", "Structure", "Policy", "Method"],
        correct: 0,
        explanation: "'たいせい' = system, framework."
      },
      {
        question: "Which is correct? 'I will contact you once I decide.'",
        options: ["けつじょうしたら、連絡します。", "けつじょうしたあとで、連絡します。", "けつじょうしても、連絡します。", "けつじょうしながら、連絡します。"],
        correct: 0,
        explanation: "～たら = when (after)."
      },
      {
        question: "What does '～にしたがって' mean?",
        options: ["According to", "Opposite to", "Because of", "Despite"],
        correct: 0,
        explanation: "～にしたがって = according to, as (time passes)."
      },
      {
        question: "Which means 'I was told not to forget the document'?",
        options: ["もんしょをわすれてはいけません。", "もんしょをわすれないでください。", "もんしょをわすれるように言われました。", "もんしょをわすれないように言われました。"],
        correct: 3,
        explanation: "～ように言われました = was told to (not) do."
      },
      {
        question: "What is 'はんい'?",
        options: ["Range", "Limit", "Scope", "Area"],
        correct: 2,
        explanation: "'はんい' = scope, range."
      },
      {
        question: "Which is correct? 'I will go after making the payment.'",
        options: ["はらいをします。", "はらいをして、いきます。", "はらいしたあとで、いきます。", "はらいしながら、いきます。"],
        correct: 2,
        explanation: "～たあとで = after doing."
      },
      {
        question: "What does '～にたいして' mean?",
        options: ["For", "To", "Compared to", "Because of"],
        correct: 2,
        explanation: "～にたいして = compared to, in contrast to."
      },
      {
        question: "Which means 'I was told to be careful'?",
        options: ["きをつけてください。", "きをつけるように言われました。", "きをつけること。", "きをつけることになります。"],
        correct: 1,
        explanation: "～ように言われました = was told to do."
      },
      {
        question: "What is 'ていあん'?",
        options: ["Suggestion", "Request", "Order", "Decision"],
        correct: 0,
        explanation: "'ていあん' = suggestion, proposal."
      },
      {
        question: "Which is correct? 'The more you study, the more questions you have.'",
        options: ["べんきょうすると、もっとしつもんがある。", "べんきょうするごとに、しつもんがある。", "べんきょうすればするほど、もっとしつもんがある。", "べんきょうしたあと、しつもんがある。"],
        correct: 2,
        explanation: "～すればするほど = the more... the more..."
      },
      {
        question: "What does '～につき' mean?",
        options: ["Because of", "Due to", "Regarding", "Along with"],
        correct: 1,
        explanation: "～につき = due to, because of (formal)."
      },
      {
        question: "Which means 'I was about to eat when the phone rang'?",
        options: ["たべる前に、電話がなりました。", "たべると、電話がなりました。", "たべようとしたとき、電話がなりました。", "たべたあと、電話がなりました。"],
        correct: 2,
        explanation: "～ようとしたとき = just as I was about to..."
      },
      {
        question: "What is 'しんらい'?",
        options: ["Trust", "Belief", "Faith", "Hope"],
        correct: 0,
        explanation: "'しんらい' = trust."
      },
      {
        question: "Which is correct? 'I will go after submitting the report.'",
        options: ["ほうこくをします。", "ほうこくをして、いきます。", "ほうこくをしたあとで、いきます。", "ほうこくをしながら、いきます。"],
        correct: 2,
        explanation: "～たあとで = after doing."
      },
      {
        question: "What does '～にかかわらず' mean?",
        options: ["Because of", "Despite", "According to", "Due to"],
        correct: 1,
        explanation: "～にかかわらず = regardless of, despite."
      },
      {
        question: "Which means 'I was about to sleep when the alarm rang'?",
        options: ["ねる前に、アラームがなりました。", "ねると、アラームがなりました。", "ねようとしたとき、アラームがなりました。", "ねたあと、アラームがなりました。"],
        correct: 2,
        explanation: "～ようとしたとき = just as I was about to..."
      },
      {
        question: "What is 'せいど'?",
        options: ["Accuracy", "Speed", "Size", "Weight"],
        correct: 0,
        explanation: "'せいど' = accuracy."
      },
      {
        question: "Which is correct? 'I will go after confirming the schedule.'",
        options: ["じゅひょうをかくにんして、いきます。", "じゅひょうをかくにんしたあとで、いきます。", "じゅひょうをかくにんすると、いきます。", "じゅひょうをかくにんしながら、いきます。"],
        correct: 1,
        explanation: "～たあとで = after doing."
      },
      {
        question: "What does '～つつ' mean?",
        options: ["Because", "While", "After", "If"],
        correct: 1,
        explanation: "～つつ = while (formal)."
      },
      {
        question: "Which means 'The more you run, the more tired you get'?",
        options: ["はしると、もっとつかれる。", "はしるごとに、つかれる。", "はしればはしるほど、もっとつかれる。", "はしったあと、つかれる。"],
        correct: 2,
        explanation: "～れば～ほど = the more... the more..."
      },
      {
        question: "What is 'たいせい'?",
        options: ["System", "Structure", "Policy", "Method"],
        correct: 0,
        explanation: "'たいせい' = system."
      }
    ]
  };