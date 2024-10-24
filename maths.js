const questions = [
    {
        question: "1.What is the derivative of x²?",
        answers: [
            { text: "2x", correct: true },
            { text: "x", correct: false },
            { text: "x²", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "2.What is the integral of 1/x?",
        answers: [
            { text: "ln|x| + C", correct: true },
            { text: "x + C", correct: false },
            { text: "1/x + C", correct: false },
            { text: "x²/2 + C", correct: false }
        ]
    },
    {
        question: "3.What is the derivative of sin(x)?",
        answers: [
            { text: "cos(x)", correct: true },
            { text: "sin(x)", correct: false },
            { text: "-sin(x)", correct: false },
            { text: "tan(x)", correct: false }
        ]
    },
    {
        question: "4.What is the integral of cos(x)?",
        answers: [
            { text: "sin(x) + C", correct: true },
            { text: "cos(x) + C", correct: false },
            { text: "-sin(x) + C", correct: false },
            { text: "tan(x) + C", correct: false }
        ]
    },
    {
        question: "5.What is the derivative of e^x?",
        answers: [
            { text: "e^x", correct: true },
            { text: "xe^x", correct: false },
            { text: "ln(x)", correct: false },
            { text: "x", correct: false }
        ]
    },
    {
        question: "6.What is the integral of x²?",
        answers: [
            { text: "x³/3 + C", correct: true },
            { text: "2x + C", correct: false },
            { text: "x²/2 + C", correct: false },
            { text: "3x + C", correct: false }
        ]
    },
    {
        question: "7.What is the derivative of ln(x)?",
        answers: [
            { text: "1/x", correct: true },
            { text: "x", correct: false },
            { text: "ln(x)", correct: false },
            { text: "e^x", correct: false }
        ]
    },
    {
        question: "8.What is the integral of x?",
        answers: [
            { text: "x²/2 + C", correct: true },
            { text: "x + C", correct: false },
            { text: "2x + C", correct: false },
            { text: "1/x + C", correct: false }
        ]
    },
    {
        question: "9.What is the derivative of tan(x)?",
        answers: [
            { text: "sec²(x)", correct: true },
            { text: "tan²(x)", correct: false },
            { text: "cos(x)", correct: false },
            { text: "sin(x)", correct: false }
        ]
    },
    {
        question: "10.What is the integral of sin(x)?",
        answers: [
            { text: "-cos(x) + C", correct: true },
            { text: "cos(x) + C", correct: false },
            { text: "sin(x) + C", correct: false },
            { text: "-sin(x) + C", correct: false }
        ]
    },
    {
        question: "11.What is the derivative of x³?",
        answers: [
            { text: "3x²", correct: true },
            { text: "x²", correct: false },
            { text: "3x", correct: false },
            { text: "x³", correct: false }
        ]
    },
    {
        question: "12.What is the integral of 2x?",
        answers: [
            { text: "x² + C", correct: true },
            { text: "2x² + C", correct: false },
            { text: "ln(x) + C", correct: false },
            { text: "x + C", correct: false }
        ]
    },
    {
        question: "13.What is the derivative of cos(x)?",
        answers: [
            { text: "-sin(x)", correct: true },
            { text: "sin(x)", correct: false },
            { text: "cos(x)", correct: false },
            { text: "tan(x)", correct: false }
        ]
    },
    {
        question: "14.What is the integral of 3x²?",
        answers: [
            { text: "x³ + C", correct: true },
            { text: "3x³ + C", correct: false },
            { text: "2x + C", correct: false },
            { text: "3x + C", correct: false }
        ]
    },
    {
        question: "15.What is the derivative of x⁴?",
        answers: [
            { text: "4x³", correct: true },
            { text: "x³", correct: false },
            { text: "3x²", correct: false },
            { text: "x⁴", correct: false }
        ]
    },
    {
        question: "16.What is the integral of 1/(x²)?",
        answers: [
            { text: "-1/x + C", correct: true },
            { text: "1/x + C", correct: false },
            { text: "ln(x) + C", correct: false },
            { text: "x + C", correct: false }
        ]
    },
    {
        question: "17.What is the derivative of sec(x)?",
        answers: [
            { text: "sec(x)tan(x)", correct: true },
            { text: "sec²(x)", correct: false },
            { text: "csc(x)", correct: false },
            { text: "sin(x)", correct: false }
        ]
    },
    {
        question: "18.What is the integral of tan(x)?",
        answers: [
            { text: "-ln|cos(x)| + C", correct: true },
            { text: "ln|sin(x)| + C", correct: false },
            { text: "cos(x) + C", correct: false },
            { text: "sin(x) + C", correct: false }
        ]
    },
    {
        question: "19.What is the derivative of x⁵?",
        answers: [
            { text: "5x⁴", correct: true },
            { text: "x⁴", correct: false },
            { text: "4x³", correct: false },
            { text: "x⁵", correct: false }
        ]
    },
    {
        question: "20.What is the integral of 2/x?",
        answers: [
            { text: "2ln|x| + C", correct: true },
            { text: "ln|x| + C", correct: false },
            { text: "2x + C", correct: false },
            { text: "x² + C", correct: false }
        ]
    },
    {
        question: "21.What is the derivative of ln(x²)?",
        answers: [
            { text: "2/x", correct: true },
            { text: "1/x", correct: false },
            { text: "ln(x)", correct: false },
            { text: "2ln(x)", correct: false }
        ]
    },
    {
        question: "22.What is the integral of e^x?",
        answers: [
            { text: "e^x + C", correct: true },
            { text: "x + C", correct: false },
            { text: "ln(x) + C", correct: false },
            { text: "2e^x + C", correct: false }
        ]
    },
    {
        question: "23What is the derivative of arcsin(x)?",
        answers: [
            { text: "1/√(1-x²)", correct: true },
            { text: "1/x", correct: false },
            { text: "x", correct: false },
            { text: "1/(1+x²)", correct: false }
        ]
    },
    {
        question: "24.What is the integral of 1/(1+x²)?",
        answers: [
            { text: "arctan(x) + C", correct: true },
            { text: "ln(x) + C", correct: false },
            { text: "x + C", correct: false },
            { text: "arccos(x) + C", correct: false }
        ]
    },
    
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = ''; // Clear previous answers
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer, question));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer, question) {
    const correct = answer.correct;

    // Disable all answer buttons after one is clicked
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            button.classList.add(correct ? 'correct' : 'wrong');
            // If the answer is wrong, add red class
            if (!correct) {
                button.style.backgroundColor = 'red'; // Color the wrong answer red
            }
        }
    });

    // Show the correct answer
    const correctAnswer = question.answers.find(a => a.correct);
    const correctAnswerMessage = document.createElement('div');
    correctAnswerMessage.innerText = `Correct Answer: ${correctAnswer.text}`;
    correctAnswerMessage.style.marginTop = '10px';
    correctAnswerMessage.style.fontWeight = 'bold';
    answerButtons.appendChild(correctAnswerMessage);

    if (correct) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        questionContainer.classList.add('hide');
        showResult();
    }
}

function showResult() {
    resultContainer.classList.remove('hide');
    scoreText.innerText = score;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
    nextButton.classList.add('hide');
});


document.getElementById('restart-btn').addEventListener('click', startGame);

startGame();
