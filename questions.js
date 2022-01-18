var userName = document.querySelector("#userName");
var headerText = document.querySelector("#headerText");
var greetingInput = document.querySelector("#greetingInput");
var startButton = document.querySelector("#startButton")
var quiz = document.querySelector("#quiz")

startButton.style.display = "none"
quiz.style.display = "none";


function greeting() {
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", are you ready? When you click the start button, the first question will appear. You'll have 15 seconds to answer the questions. If you answer incorrectly, time will be subtracted from the clock. If the timer reaches 0 the game is over.";
    greetingInput.style.display = "none"
    quiz.style.display = "block";

}



function startquiz() {
    startButton.style.display = "none";
    startButton.style.display = "block";

}