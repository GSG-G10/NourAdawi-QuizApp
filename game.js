const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let questions = [
    {
        question: 'Pollination by birds is called:',
        choice1: 'ornithophily',
        choice2: 'autogamy',
        choice3: 'entomophily',
        choice4: 'anemophily ',
        answer: 1,
    },
    {
        question:
            "What percent of fire-related deaths are due to smoke inhalation rather than burns?",
        choice1: "10%",
        choice2: "80%",
        choice3: "50%",
        choice4: "99%",
        answer: 3,
    },
    {
        question: "The fastest-running terrestrial animal is:",
        choice1: "cheetah",
        choice2: "lion",
        choice3: "man",
        choice4: "jaguar",
        answer: 2,
    },
    {
        question: "As you go down into a well, your weight:",
        choice1: "increases slightly",
        choice2: "remains exactly the same",
        choice3: "decreases slightly",
        choice4: "None of the above",
        answer: 3,
    },
    {
        question: "Albacore is a type:",
        choice2: "meteoroid",

        choice1: "shell-fish",
        choice3: "marble",
        choice4: "tuna",

        answer: 4,
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {   if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign('/end.html');
}

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;

};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
          }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
          selectedChoice.parentElement.classList.remove(classToApply);
          getNewQuestion(); 
        }, 1000);
        
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
  };

startGame();