const questions = [
  {
    question: '1. Which is the largest planet in our solar system?',
    answers: [
      { text: 'Earth', correct: false },
      { text: 'Jupiter', correct: true },
      { text: 'Mars', correct: false },
      { text: 'Venus', correct: false }
    ]
  },
  {
    question: '2. Who wrote the novel "1984"?',
    answers: [
      { text: 'George Orwell', correct: true },
      { text: 'J.K. Rowling', correct: false },
      { text: 'Ernest Hemingway', correct: false },
      { text: 'F. Scott Fitzgerald', correct: false }
    ]
  },
  {
    question: '3.What is the capital of France?',
    answers: [
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: false },
      { text: 'Paris', correct: true },
      { text: 'Rome', correct: false }
    ]
  },
  {
    question: '4.Which element has the chemical symbol "O"?',
    answers: [
      { text: 'Oxygen', correct: true },
      { text: 'Gold', correct: false },
      { text: 'Osmium', correct: false },
      { text: 'Iron', correct: false }
    ]
  },
  {
    question: '5.What is the hardest natural substance on Earth?',
    answers: [
      { text: 'Gold', correct: false },
      { text: 'Iron', correct: false },
      { text: 'Diamond', correct: true },
      { text: 'Platinum', correct: false }
    ]
  },
  {
    question: '6.Who painted the Mona Lisa?',
    answers: [
      { text: 'Leonardo da Vinci', correct: true },
      { text: 'Vincent van Gogh', correct: false },
      { text: 'Pablo Picasso', correct: false },
      { text: 'Claude Monet', correct: false }
    ]
  },
  {
    question: '7.In which year did the Titanic sink?',
    answers: [
      { text: '1910', correct: false },
      { text: '1912', correct: true },
      { text: '1914', correct: false },
      { text: '1916', correct: false }
    ]
  },
  {
    question: '8.What is the largest ocean on Earth?',
    answers: [
      { text: 'Atlantic Ocean', correct: false },
      { text: 'Indian Ocean', correct: false },
      { text: 'Arctic Ocean', correct: false },
      { text: 'Pacific Ocean', correct: true }
    ]
  },
  {
    question: '9.What is the smallest prime number?',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: true },
      { text: '3', correct: false },
      { text: '5', correct: false }
    ]
  },
  {
    question: '10.Which planet is known as the Red Planet?',
    answers: [
      { text: 'Mars', correct: true },
      { text: 'Jupiter', correct: false },
      { text: 'Saturn', correct: false },
      { text: 'Venus', correct: false }
    ]
  },
  {
    question: '11.What is the largest mammal?',
    answers: [
      { text: 'Elephant', correct: false },
      { text: 'Blue Whale', correct: true },
      { text: 'Giraffe', correct: false },
      { text: 'Shark', correct: false }
    ]
  },
  {
    question: '12.Which country is known as the Land of the Rising Sun?',
    answers: [
      { text: 'China', correct: false },
      { text: 'Japan', correct: true },
      { text: 'Thailand', correct: false },
      { text: 'South Korea', correct: false }
    ]
  },
  {
    question: '13.Who is the author of the Harry Potter series?',
    answers: [
      { text: 'J.K. Rowling', correct: true },
      { text: 'J.R.R. Tolkien', correct: false },
      { text: 'George R.R. Martin', correct: false },
      { text: 'C.S. Lewis', correct: false }
    ]
  },
  {
    question: '14.What is the chemical symbol for gold?',
    answers: [
      { text: 'Au', correct: true },
      { text: 'Ag', correct: false },
      { text: 'Pb', correct: false },
      { text: 'Fe', correct: false }
    ]
  },
  {
    question: '15.Which animal is known as the King of the Jungle?',
    answers: [
      { text: 'Lion', correct: true },
      { text: 'Tiger', correct: false },
      { text: 'Elephant', correct: false },
      { text: 'Bear', correct: false }
    ]
  },
  {
    question: '16.What is the smallest unit of life?',
    answers: [
      { text: 'Atom', correct: false },
      { text: 'Molecule', correct: false },
      { text: 'Cell', correct: true },
      { text: 'Organism', correct: false }
    ]
  },
  {
    question: '17.Which continent is the Sahara Desert located in?',
    answers: [
      { text: 'Africa', correct: true },
      { text: 'Asia', correct: false },
      { text: 'North America', correct: false },
      { text: 'South America', correct: false }
    ]
  },
  {
    question: '18.Who was the first person to walk on the moon?',
    answers: [
      { text: 'Buzz Aldrin', correct: false },
      { text: 'Neil Armstrong', correct: true },
      { text: 'Yuri Gagarin', correct: false },
      { text: 'Michael Collins', correct: false }
    ]
  },
  {
    question: '19.What is the largest organ in the human body?',
    answers: [
      { text: 'Heart', correct: false },
      { text: 'Liver', correct: false },
      { text: 'Skin', correct: true },
      { text: 'Lung', correct: false }
    ]
  },
  {
    question: '20.What is the speed of light?',
    answers: [
      { text: '300,000 km/s', correct: true },
      { text: '150,000 km/s', correct: false },
      { text: '600,000 km/s', correct: false },
      { text: '1,000,000 km/s', correct: false }
    ]
  },
  {
    question: '21.Which gas do plants need for photosynthesis?',
    answers: [
      { text: 'Oxygen', correct: false },
      { text: 'Hydrogen', correct: false },
      { text: 'Carbon Dioxide', correct: true },
      { text: 'Nitrogen', correct: false }
    ]
  },
  {
    question: '22.What is the capital of Australia?',
    answers: [
      { text: 'Sydney', correct: false },
      { text: 'Melbourne', correct: false },
      { text: 'Canberra', correct: true },
      { text: 'Brisbane', correct: false }
    ]
  },
  // Continue with remaining questions until 100
  {
    question: '23.Who developed the theory of relativity?',
    answers: [
      { text: 'Isaac Newton', correct: false },
      { text: 'Albert Einstein', correct: true },
      { text: 'Nikola Tesla', correct: false },
      { text: 'Stephen Hawking', correct: false }
    ]
  },
  {
    question: '24.Which country won the FIFA World Cup in 2018?',
    answers: [
      { text: 'Brazil', correct: false },
      { text: 'Germany', correct: false },
      { text: 'France', correct: true },
      { text: 'Argentina', correct: false }
    ]
  },
  {
    question: '25.What is the freezing point of water?',
    answers: [
      { text: '0°C', correct: true },
      { text: '32°C', correct: false },
      { text: '100°C', correct: false },
      { text: '50°C', correct: false }
    ]
  },
  {
    question: '26.Who discovered penicillin?',
    answers: [
      { text: 'Marie Curie', correct: false },
      { text: 'Alexander Fleming', correct: true },
      { text: 'Louis Pasteur', correct: false },
      { text: 'Thomas Edison', correct: false }
    ]
  },
  {
    question: '27.What is the capital city of Canada?',
    answers: [
      { text: 'Toronto', correct: false },
      { text: 'Vancouver', correct: false },
      { text: 'Ottawa', correct: true },
      { text: 'Montreal', correct: false }
    ]
  },
  {
    question: '28.What is the capital city of India?',
    answers: [
      { text: 'Lucknow', correct: false },
      { text: 'Delhi', correct: false },
      { text: 'New Delhi', correct: true },
      { text: 'Vanaras', correct: false }
    ]
  }
  // Add more questions similarly to complete 100 questions
];

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionContainerElement.classList.remove('hide');
  resultContainer.classList.add('hide');
  nextButton.classList.add('hide');
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = ''; // Clear previous answers

  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
  }
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });

  if (currentQuestionIndex < questions.length - 1) {
    nextButton.classList.remove('hide');
  } else {
    showResult();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function showResult() {
  questionContainerElement.classList.add('hide');
  resultContainer.classList.remove('hide');
  scoreElement.innerText = `${score*4}`;
  restartButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  nextButton.classList.add('hide');
  showQuestion(questions[currentQuestionIndex]);
});

restartButton.addEventListener('click', startQuiz);

startQuiz();
