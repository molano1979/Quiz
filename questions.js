var userName = document.querySelector("#userName");
var headerText = document.querySelector("#headerText");
var greetingInput = document.querySelector("#greetingInput");
var quiz = document.querySelector("#quiz");
var qn1Button = document.querySelector("#qn1Button");
var qn2Button = document.querySelector("#qn2Button");
var qn3Button = document.querySelector("#qn3Button");
var qn4Button = document.querySelector("#qn4Button");
var qn5Button = document.querySelector("#qn5Button");
var qn6Button = document.querySelector("#qn6Button");
var question = document.querySelector("#question");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var iterationNumber = 0;
var qnChoice = "";
var score = 0;

var questionList = [
    "1: In which continent are Chile, Colombia, Argentina and Brazil?",
    "2: Which of the following is not an international organization?",
    "3: Which did the Viking people use as money?",
    "4: What was the first country to use tanks in combat during World War 1?",
    "5: Which two months are named after Emperors of the Roman Empire?",
    "6: What princess was traditionally called Badr al-Budur before Disney renamed her?"
]

quiz.style.display = "none";
qn1Button.style.display = "none";
qn2Button.style.display = "none";
qn3Button.style.display = "none";
qn4Button.style.display = "none";
qn5Button.style.display = "none";
qn6Button.style.display = "none";


function greeting() {
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", welcome to The Quiz";
    greetingInput.style.display = "none"
    quiz.style.display = "block"
    qn1Button.style.display = "block";
    question.innerHTML = questionList[iterationNumber];
}

function aFunction() {
    answerA.style.color = "red";
    answerB.style.color = "black";
    answerC.style.color = "black";
    answerD.style.color = "black";
    qnChoice = "a";
}

function bFunction() {
    answerA.style.color = "black";
    answerB.style.color = "red";
    answerC.style.color = "black";
    answerD.style.color = "black";
    qnChoice = "b";
}

function cFunction() {
    answerA.style.color = "black";
    answerB.style.color = "black";
    answerC.style.color = "red";
    answerD.style.color = "black";
    qnChoice = "c";
}

function dFunction() {
    answerA.style.color = "black";
    answerB.style.color = "black";
    answerC.style.color = "black";
    answerD.style.color = "red";
    qnChoice = "d";
}

function submitQn1() {
    if (qnChoice == "b") {
        score += 1;
    }
    iterationNumber += 1;
    question.innerHTML = questionList[iterationNumber];
    qn1Button.style.display = "none";
    qn2Button.style.display = "block";

}

function submitQn2() {
    if (qnChoice == "d") {
        score += 1;
    }
    iterationNumber += 1;
    question.innerHTML = questionList[iterationNumber];
    qn2Button.style.display = "none";
    qn3Button.style.display = "block";

}

function submitQn3() {
    if (qnChoice == "b") {
        score += 1;
    }
    iterationNumber += 1;
    question.innerHTML = questionList[iterationNumber];
    qn3Button.style.display = "none";
    qn4Button.style.display = "block";

}

function submitQn4() {
    if (qnChoice == "c") {
        score += 1;
    }
    iterationNumber += 1;
    question.innerHTML = questionList[iterationNumber];
    qn4Button.style.display = "none";
    qn5Button.style.display = "block";

}

function submitQn5() {
    if (qnChoice == "d") {
        score += 1;
    }
    iterationNumber += 1;
    question.innerHTML = questionList[iterationNumber];
    qn5Button.style.display = "none";
    qn6Button.style.display = "block";

}

function submitQn6() {
    if (qnChoice == "c") {
        score += 1;
    }
    iterationNumber += 1;
    headerText.innerHTML = "Your score is " + score;
    quiz.style.display = "none";
  
}