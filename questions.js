var userName = document.querySelector("#userName");


var headerText = document.querySelector("#headerText");


function greeting() {
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", welcome to The Quiz";
}