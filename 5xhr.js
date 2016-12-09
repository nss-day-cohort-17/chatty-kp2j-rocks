
  var messageRequest1 = new XMLHttpRequest();
  messageRequest1.addEventListener("load", chattyRoom1);
  messageRequest1.open("GET","message1.json");
  messageRequest1.send();

  var messageRequest2 = new XMLHttpRequest();
  messageRequest2.addEventListener("load", chattyRoom2);
  messageRequest2.open("GET","message2.json");
  messageRequest2.send();

  var messageRequest3 = new XMLHttpRequest();
  messageRequest3.addEventListener("load", chattyRoom3);
  messageRequest3.open("GET","message3.json");
  messageRequest3.send();

  var messageRequest4 = new XMLHttpRequest();
  messageRequest4.addEventListener("load", chattyRoom4);
  messageRequest4.open("GET","message4.json");
  messageRequest4.send();

  var messageRequest5 = new XMLHttpRequest();
  messageRequest5.addEventListener("load", chattyRoom5);
  messageRequest5.open("GET","message5.json");
  messageRequest5.send();



function chattyRoom1(e) {
  data1 =JSON.parse(e.target.responseText);
  jsonData[0] = data1.messages[0].message;

};


function chattyRoom2(e) {
data2 =JSON.parse(e.target.responseText);
console.log(data2);

    jsonData[1] = data2.messages[0].message;
};

function chattyRoom3(e) {
data3 =JSON.parse(e.target.responseText);
console.log(data3);

    jsonData[2] = data3.messages[0].message;
};

function chattyRoom4(e) {
data4 =JSON.parse(e.target.responseText);
console.log(data4);

    jsonData[3] = data4.messages[0].message;
};

function chattyRoom5(e) {
data5 =JSON.parse(e.target.responseText);
console.log(data5);
jsonData[4] = data5.messages[0].message;
defaultMessage()
};
