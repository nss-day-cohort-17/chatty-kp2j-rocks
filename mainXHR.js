// variable for clearbutton
var clearButton = document.getElementById("clearButton");
// variable for dark theme checkbox
var darkTheme = document.getElementById("darkCheck");
// variable for large text checkbox
var makeLarge = document.getElementById('largeText');
// to disable clear button and to call this and in all preceding functions
function checkChatBox() {
    if (document.getElementById("message").innerHTML === "") {
        console.log('if checkChatBox running');
        clearButton.disabled = true;
    } else {
        // console.log('else checkChatBox running', chatBox.innerHTML);
        clearButton.disabled = false;
    }
}
creating new xhr
for getting the json file
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", chattyRoom);
myRequest.open("GET", "https://chatty-kp2j-rocks.firebaseio.com/.json");
myRequest.send();
var data = "";

function chattyRoom(e) {
    data = JSON.parse(e.target.responseText);
    defaultMessage();
    console.log("data", data);
}
//keypress event
function kbevt(event) {
    if (event.keyCode === 13) {
        newMessage();
        console.log("you pressed return key");
    }
}
document.getElementById("textBar").focus();
document.getElementById("textBar").addEventListener("keypress", kbevt);
// function to clear all messages
function clearMessages() {
    event.preventDefault();
    document.getElementById("message").innerHTML = "";
}
// event listener for clear button
clearButton.addEventListener("click", clearMessages);
// event listener for dark theme checkbox
darkTheme.addEventListener("click", darkToggle);
// function for darkTheme checkbox
function darkToggle() {
    if (darkTheme.checked) {
        document.body.style.background = "darkgray";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
}
// event listener for large text checkbox
makeLarge.addEventListener("click", largeToggle);
// function for large text checkbox
function largeToggle() {
    if (makeLarge.checked) {
        document.body.style.fontSize = "1.8em";
    } else {
        document.body.style.fontSize = "1.4em";
    }
}
//function to create a new message
var mainContent = "";

function newMessage() {
    var mainContent = document.getElementById("textBar").value;
    console.log(document.getElementById("textBar").value);
    mainContent = `<p>${mainContent}<button>Delete</button></p>`;
    document.getElementById("message").innerHTML += mainContent;
    document.getElementById("textBar").innerHTML = "";
}
//put the messages on the json file to messages area
var mainMessage = "";

function defaultMessage() {
    for (var i = 0; i < data.messages.length; i++) {
        mainMessage += `<p>${data.messages[i].message}<button>Delete</button></p> `;
    }
    document.getElementById("message").innerHTML = mainMessage;
}
