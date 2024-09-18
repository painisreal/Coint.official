// Array to store questions and answers
let Questions = [];

// Function to add a new question
function addQuestion() {
    const ques = prompt("Enter the question:");
    const correctAns = prompt("Enter the correct answer:");
    const incorrectAns1 = prompt("Enter the first incorrect answer:");
    const incorrectAns2 = prompt("Enter the second incorrect answer:");
    const incorrectAns3 = prompt("Enter the third incorrect answer:");

    // Create a new question object
    const newQuestion = {
        question: ques,
        correct_answer: correctAns,
        incorrect_answers: [incorrectAns1, incorrectAns2, incorrectAns3]
    };

    // Add the new question to the array
    Questions.push(newQuestion);
}

// Function to load questions from the array
function loadQues() {
    const opt = document.getElementById("opt");
    let currentQuestion = Questions[currQuestion].question;
    ques.innerText = currentQuestion;
    opt.innerHTML = "";
    const correctAnswer = Questions[currQuestion].correct_answer;
    const incorrectAnswers = Questions[currQuestion].incorrect_answers;
    const options = [correctAnswer, ...incorrectAnswers];
    options.sort(() => Math.random() - 0.5);
    options.forEach((option) => {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = option;
        choiceLabel.textContent = option;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    });
}

// Function to load score
function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
    totalScore.innerHTML += "<h3>All Answers</h3>";
    Questions.forEach((el, index) => {
        totalScore.innerHTML += `<p>${index + 1}. ${el.correct_answer}</p>`
    });
}

// Function to check answer
function checkAns() {
    const selectedAns = document.querySelector('input[name="answer"]:checked').value;
    if (selectedAns === Questions[currQuestion].correct_answer) {
        score++;
    }
    nextQuestion();
}

// Function to go to the next question
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}

// Variables to keep track of the current question and score
let currQuestion = 0;
let score = 0;

// Add event listener to the add question button
document.getElementById("addQues").addEventListener("click", addQuestion);

// Add event listener to the submit button
document.getElementById("btn").addEventListener("click", checkAns);

// Load the first question
loadQues();