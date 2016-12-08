var mainMessage="";

var mainContent ="";

var data ="";

var jsonData =[];

// variable for clearbutton
var clearButton = document.getElementById("clearButton");
// variable for dark theme checkbox
var darkTheme = document.getElementById("darkCheck");

// object for user names
var users = {
  names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"];
};

// variable for large text checkbox
var makeLarge = document.getElementById('largeText');
//creating new xhr for getting the json filec
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", chattyRoom);
myRequest.open("GET", "https://chatty-kp2j-rocks.firebaseio.com/.json");
myRequest.send();
//get the input from JSON
function chattyRoom(e) {
    data = JSON.parse(e.target.responseText);
    defaultMessage();
};
//cursor focus on input box on reload
document.getElementById("textBar").focus();
// to disable clear button and to call this and in all preceding functions
function checkChatBox() {
   if (document.getElementById("message").innerText === "") {

       clearButton.disabled = true;
   } else {
       // console.log('else checkChatBox running', chatBox.innerHTML);
       clearButton.disabled = false;

   }
}

//keypress event
function kbevt(event) {
    if (event.keyCode === 13) {
        newMessage();
         checkChatBox();

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


// event listener for dark theme checkbox
darkTheme.addEventListener("click", darkToggle);
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

function newMessage() {
  var mainContent = document.getElementById("textBar").value;
    if (mainContent !== "") {
    mainContent = `<p>${mainContent}<button>Delete</button></p>`
  }
document.getElementById("message").innerHTML +=mainContent;

document.getElementById("textBar").value= "";

}

//put the messages on the json file to messages area

function defaultMessage() {
    for (var i = 0; i < data.messages.length; i++) {
        mainMessage += `<p>${data.messages[i].message}<button>Delete</button></p> `;
    }
    document.getElementById("message").innerHTML = mainMessage;
}

// event listener for button presses anywhere on body
document.querySelector("body").addEventListener("click", function(event) {
  // Handle the click event on any button
    if (event.target.tagName.toLowerCase() === "button") {
        // if its the clear messages button clear all of the messages
        if (event.target.id === "clearButton") {
          clearMessages();
          checkChatBox();
        // otherwise clear just the message next to the delete button
        } else {
          event.target.parentNode.parentNode.removeChild(event.target.parentNode);
          checkChatBox();
        }
    }
});
