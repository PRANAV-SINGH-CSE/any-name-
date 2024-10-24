const questions = [
    {
        question: "1. Which country won the FIFA World Cup in 2014?",
        answers: [
            { text: "Germany", correct: true },
            { text: "Argentina", correct: false },
            { text: "Brazil", correct: false },
            { text: "Spain", correct: false }
        ]
    },
    {
        question: "2. Which athlete has won the most Olympic gold medals?",
        answers: [
            { text: "Usain Bolt", correct: false },
            { text: "Michael Phelps", correct: true },
            { text: "Carl Lewis", correct: false },
            { text: "Mark Spitz", correct: false }
        ]
    },
    {
        question: "3. In which sport is the term 'offside' used?",
        answers: [
            { text: "Tennis", correct: false },
            { text: "Soccer", correct: true },
            { text: "Baseball", correct: false },
            { text: "Golf", correct: false }
        ]
    },
    {
        question: "4. Which country hosted the 2016 Summer Olympics?",
        answers: [
            { text: "China", correct: false },
            { text: "Brazil", correct: true },
            { text: "United States", correct: false },
            { text: "United Kingdom", correct: false }
        ]
    },
    {
        question: "5. What is the national sport of Canada?",
        answers: [
            { text: "Ice Hockey", correct: true },
            { text: "Basketball", correct: false },
            { text: "Lacrosse", correct: true },
            { text: "Cricket", correct: false }
        ]
    },
    {
        question: "6. How long is an Olympic swimming pool?",
        answers: [
            { text: "25 meters", correct: false },
            { text: "50 meters", correct: true },
            { text: "75 meters", correct: false },
            { text: "100 meters", correct: false }
        ]
    },
    {
        question: "7. Who is the only tennis player to have won all four Grand Slam titles in the same year twice?",
        answers: [
            { text: "Rafael Nadal", correct: false },
            { text: "Rod Laver", correct: true },
            { text: "Roger Federer", correct: false },
            { text: "Novak Djokovic", correct: false }
        ]
    },
    {
        question: "8. In which city were the first modern Olympics held?",
        answers: [
            { text: "Athens", correct: true },
            { text: "Paris", correct: false },
            { text: "London", correct: false },
            { text: "Berlin", correct: false }
        ]
    },
    {
        question: "9. How many players are there in a rugby union team?",
        answers: [
            { text: "11", correct: false },
            { text: "13", correct: false },
            { text: "15", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        question: "10. Who is known as 'The Greatest' in boxing?",
        answers: [
            { text: "Mike Tyson", correct: false },
            { text: "Muhammad Ali", correct: true },
            { text: "Floyd Mayweather", correct: false },
            { text: "George Foreman", correct: false }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    answerButtons.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer, button)); // Pass the button to the function
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer, button) {
    if (answer.correct) {
        score++;
        button.classList.add('correct'); // Add the correct class
    } else {
        button.classList.add('wrong'); // Add the wrong class
    }
    const buttons = answerButtons.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.disabled = true; // Disable all buttons after selecting an answer
    });
    nextButton.classList.remove('hide');
}

function showScore() {
    questionContainer.classList.add('hide');
    answerButtons.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultText.innerText = `You scored ${score} out of ${questions.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        showScore();
    }
});

restartButton.addEventListener('click', startGame);

// Start the game on page load
startGame();
