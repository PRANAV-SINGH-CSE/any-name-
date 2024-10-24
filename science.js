const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

// Fetch questions from the API
async function fetchQuestions() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple");
    const data = await response.json();
    
    // Format the questions
    questions = data.results.map(question => ({
        question: question.question,
        answers: [...question.incorrect_answers.map(answer => ({ text: answer, correct: false })), 
                  { text: question.correct_answer, correct: true }]
    }));
    
    startGame();
}

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerHTML = question.question; // Use innerHTML to render HTML entities
    answerButtons.innerHTML = ''; // Clear previous answers
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text; // Use innerHTML to render HTML entities
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
        if (button.innerHTML === answer.text) {
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

document.getElementById('restart-btn').addEventListener('click', fetchQuestions);

// Fetch questions on page load
fetchQuestions();
