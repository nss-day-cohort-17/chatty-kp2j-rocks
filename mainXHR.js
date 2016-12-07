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
 document.getElementById("formControl").addEventListener("keypress", kbevt);
function kbevt(event) {
    if(event.keyCode === 13) {
      console.log("you pressed return key")
    }
}
