var userName = document.querySelector("#userName");
var headerText = document.querySelector("#headerText");
var greetingInput = document.querySelector("#greetingInput");
var quiz = document.querySelector("#quiz");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");




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
}

function bFunction() {
    answerA.style.color = "black";
    answerB.style.color = "red";
    answerC.style.color = "black";
    answerD.style.color = "black";
}

function cFunction() {
    answerA.style.color = "black";
    answerB.style.color = "black";
    answerC.style.color = "red";
    answerD.style.color = "black";
}

function dFunction() {
    answerA.style.color = "black";
    answerB.style.color = "black";
    answerC.style.color = "black";
    answerD.style.color = "red";
}