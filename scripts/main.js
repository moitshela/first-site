var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lucas.JPG')
     {
      myImage.setAttribute ('src','images/lucas2.JPG');
    } else {
      myImage.setAttribute ('src','images/lucas.JPG');
    }
}
var myButton = document.getElementById('button');
var myHeading = document.queryselector('h1');
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'PROGRAMING IS COOL, ' + storedName;
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'PROGRAMING IS COOL, ' + myName;
}
myButton.document.onclick = function() {
  setUserName();
}
