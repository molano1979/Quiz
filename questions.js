var userName = document.querySelector("#userName");
var headerText = document.querySelector("#headerText");
var greetingInput = document.querySelector("#greetingInput");
var quiz = document.querySelector("#quiz");
var qn1Button = document.querySelector("#qn1Button");
var qn2Button = document.querySelector("#qn2Button");
var qn3Button = document.querySelector("#qn3Button");
var question = document.querySelector("#question");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var iterationNumber = 0;
var qnChoice = "";
var score = 0;

var questionList = [
"1. In which city is the Ifle Tower?",
"2. What is the capital for France? ",
"3. What European city borders Paris? "

]

quiz.style.display = "none";
qn1Button.style.display = "none";
qn2Button.style.display = "none";
qn3Button.style.display = "none";


function greeting() {
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", welcome to The Quiz!"
    greetingInput.style.display = "none"
    quiz.style.display = "block";
    qn1Button.style.display = "block";
    question.innerHTML = questionList[iterationNumber];

}

function aFunction() {
    answerA.style.color = "red";
    answerB.style.color = "darkslateblue";
    answerC.style.color = "darkslateblue";
    answerD.style.color = "darkslateblue";
    qnChoice = "a";
}

function bFunction() {
    answerA.style.color = "darkslateblue";
    answerB.style.color = "red";
    answerC.style.color = "darkslateblue";
    answerD.style.color = "darkslateblue";
    qnChoice = "b";
}

function cFunction() {
    answerA.style.color = "darkslateblue";
    answerB.style.color = "darkslateblue";
    answerC.style.color = "red";
    answerD.style.color = "darkslateblue";
    qnChoice = "c";
}

function dFunction() {
    answerA.style.color = "darkslateblue";
    answerB.style.color = "darkslateblue";
    answerC.style.color = "darkslateblue";
    answerD.style.color = "red";
    qnChoice = "d";
}

function submitQn1() {
if (qnChoice == "a") {
    score += 1;
}
iterationNumber += 1;
question.innerHTML = questionList[iterationNumber];
qn1Button.style.display = "none";
qn2Button.style.display = "block";

}