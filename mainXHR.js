// variable for dark theme checkbox
var darkTheme = document.getElementById("darkCheck");

//creating new xhr for getting the json file
var myRequest = new XMLHttpRequest ();
myRequest.addEventListener("load",chattyRoom);
myRequest.open("GET","https://chatty-kp2j-rocks.firebaseio.com/.json");
myRequest.send();


function chattyRoom (e) {
var data = JSON.parse(e.target.responseText);
console.log("data", data)
}

 //keypress event
function kbevt(event) {
    if(event.keyCode === 13) {
      console.log("you pressed return key")
    }
}

document.getElementById("formControl").addEventListener("keypress", kbevt);

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

// event listener for dark theme checkbox
darkTheme.addEventListener("click", darkToggle);
