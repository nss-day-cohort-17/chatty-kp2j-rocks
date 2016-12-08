// variable for clearbutton
var clearButton = document.getElementById("clearButton")
// variable for dark theme checkbox
var darkTheme = document.getElementById("darkCheck");


var mainMessage="";

var mainContent ="";

var data ="";

var myRequest = new XMLHttpRequest ();


//creating new xhr for getting the json file
myRequest.addEventListener("load",chattyRoom);
myRequest.open("GET","https://chatty-kp2j-rocks.firebaseio.com/.json");
myRequest.send();

function chattyRoom (e) {
data = JSON.parse(e.target.responseText);
defaultMessage();
console.log("data", data)
}

 //keypress event
function kbevt(event) {
    if(event.keyCode === 13) {
      newMessage();
      console.log("you pressed return key")
    }
}

document.getElementById("textBar").addEventListener("keypress", kbevt);

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

// function to clear all messages
function clearMessages() {
  event.preventDefault();
  document.getElementById("message").innerHTML = "";
}

// event listener for clear button
clearButton.addEventListener("click", clearMessages);

// event listener for dark theme checkbox
darkTheme.addEventListener("click", darkToggle);


//function to create message a new message
var mainContent ="";
function newMessage() {

  document.getElementById("message").innerHTML =mainContent;
}



//put the messages on the json file to messages area
var mainMessage="";
function defaultMessage() {
  for ( var i=0 ; i < data.messages.length ; i++) {
    mainMessage += `<p>${data.messages[i].message}<button>Delete</button></p> `
  }
  document.getElementById("message").innerHTML = mainMessage;
}
