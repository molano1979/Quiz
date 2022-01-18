var userName = document.querySelector("#userName");
var headerText = document.querySelector("#headerText");
var greetingInput = document.querySelector("#greetingInput");
var quiz = document.querySelector("#quiz");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var qnChoice = "";
var score = 0;




quiz.style.display = "none";

function greeting() {
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", welcome to The Quiz";
    greetingInput.style.display = "none"
    quiz.style.display = "block"
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
console.log (score);
}