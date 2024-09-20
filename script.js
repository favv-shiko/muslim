const questions = {
    easy: [
        { question: "ما هي أول صلاة فرضت على المسلمين؟", answers: ["الفجر", "الظهر", "العصر", "العشاء"], correct: 0 },
        { question: "كم عدد ركعات صلاة الفجر؟", answers: ["2", "4", "3", "5"], correct: 0 },
        { question: "ما هو عدد ركعات صلاة العشاء؟", answers: ["2", "4", "3", "5"], correct: 1 },
        { question: "كم مرة في اليوم يجب على المسلم الصلاة؟", answers: ["3", "4", "5", "6"], correct: 2 },
        { question: "في أي شهر يصوم المسلمون؟", answers: ["رجب", "شعبان", "رمضان", "ذو الحجة"], correct: 2 },
        { question: "كم عدد أيام شهر رمضان؟", answers: ["28", "29 أو 30", "31", "27"], correct: 1 },
        { question: "ما هي الزكاة؟", answers: ["صدقة", "ركن من أركان الإسلام", "حج", "دعاء"], correct: 1 },
        { question: "ما هو الركن الخامس من أركان الإسلام؟", answers: ["الصلاة", "الزكاة", "الحج", "الصوم"], correct: 2 },
        { question: "كم مرة يجب أداء الحج في العمر؟", answers: ["مرة واحدة", "مرتين", "ثلاث مرات", "كل سنة"], correct: 0 },
        { question: "كم عدد ركعات صلاة الجمعة؟", answers: ["2", "4", "6", "8"], correct: 0 }
    ],
    medium: [
        { question: "ما هي السورة التي تُسمى قلب القرآن؟", answers: ["البقرة", "يس", "الفاتحة", "الإخلاص"], correct: 1 },
        { question: "من هو النبي الذي ابتلعه الحوت؟", answers: ["موسى", "يونس", "عيسى", "محمد"], correct: 1 },
        { question: "كم عدد سور القرآن الكريم؟", answers: ["114", "100", "90", "150"], correct: 0 },
        { question: "من هو أول الخلفاء الراشدين؟", answers: ["عمر بن الخطاب", "أبو بكر الصديق", "عثمان بن عفان", "علي بن أبي طالب"], correct: 1 },
        { question: "في أي سنة هاجر النبي محمد صلى الله عليه وسلم إلى المدينة؟", answers: ["622م", "623م", "621م", "620م"], correct: 0 },
        { question: "ما هو لقب النبي محمد صلى الله عليه وسلم قبل الإسلام؟", answers: ["الصادق الأمين", "الفاروق", "ذو النورين", "أسد الله"], correct: 0 },
        { question: "ما هي أول سورة في القرآن الكريم؟", answers: ["الفاتحة", "البقرة", "النساء", "الملك"], correct: 0 },
        { question: "ما هو يوم الجمعة بالنسبة للمسلمين؟", answers: ["عيد أسبوعي", "عيد سنوي", "لا يوجد", "عيد خاص"], correct: 0 },
        { question: "من هو خامس الخلفاء الراشدين؟", answers: ["عمر بن عبد العزيز", "معاوية بن أبي سفيان", "الحسن بن علي", "الوليد بن عبد الملك"], correct: 0 },
        { question: "ما هي الكعبة؟", answers: ["بيت الله", "مسجد", "مكان تاريخي", "مدينة"], correct: 0 }
    ],
    hard: [
        { question: "ما هي الآية التي تتحدث عن النحل؟", answers: ["البقرة", "النحل", "الأنعام", "الأعراف"], correct: 1 },
        { question: "من هو أول نبي أُرسل للبشر؟", answers: ["نوح", "آدم", "إبراهيم", "محمد"], correct: 1 },
        { question: "ما هي اللغة التي نزل بها القرآن الكريم؟", answers: ["العربية", "الإنجليزية", "الفرنسية", "العبرية"], correct: 0 },
        { question: "ما هي الآية التي تتحدث عن الحجاب؟", answers: ["النور", "البقرة", "النساء", "المائدة"], correct: 0 },
        { question: "من هو النبي الذي قُتل على يد قومه؟", answers: ["إسحاق", "يحيى", "عيسى", "موسى"], correct: 1 },
        { question: "ما هي السورة التي تتحدث عن غزوة بدر؟", answers: ["آل عمران", "الأنفال", "البقرة", "النساء"], correct: 1 },
        { question: "ما هو اسم السيف الخاص بالنبي محمد صلى الله عليه وسلم؟", answers: ["ذو الفقار", "البتار", "الصرم", "السام"], correct: 0 },
        { question: "ما هي السورة التي تحتوي على آية الكرسي؟", answers: ["البقرة", "النساء", "الملك", "يس"], correct: 0 },
        { question: "ما هو المسجد الذي صلى فيه النبي بالأنبياء ليلة الإسراء؟", answers: ["المسجد الحرام", "المسجد الأقصى", "مسجد قبا", "مسجد النبوي"], correct: 1 },
        { question: "ما هو الكتاب الذي نزل على النبي موسى عليه السلام؟", answers: ["الإنجيل", "الزبور", "التوراة", "القرآن"], correct: 2 }
    ]
};

let currentQuestion = 0;
let score = 0;
let selectedDifficulty = '';

function startGame(difficulty) {
    selectedDifficulty = difficulty;
    currentQuestion = 0;
    score = 0;
    document.getElementById('difficulty-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answersList = document.getElementById('answers-list');
    const nextButton = document.getElementById('next-button');
    
    questionElement.textContent = questions[selectedDifficulty][currentQuestion].question;
    answersList.innerHTML = "";

    questions[selectedDifficulty][currentQuestion].answers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.onclick = () => checkAnswer(index);
        answersList.appendChild(li);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[selectedDifficulty][currentQuestion].correct;

    if (selectedAnswer === correctAnswer) {
        score++;
        alert("إجابة صحيحة!");
    } else {
        alert("إجابة خاطئة!");
    }

    document.getElementById('next-button').style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions[selectedDifficulty].length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<p>لقد انتهيت من اللعبة! نتيجتك: ${score} من ${questions[selectedDifficulty].length}</p>`;
    document.getElementById('retry-button').style.display = "block";
    document.getElementById('main-menu-button').style.display = "block";
}

function retryGame() {
    startGame(selectedDifficulty);
}

function goToMainMenu() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('difficulty-container').style.display = 'block';
}
