var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc == "images/cat3.jpg") {
    myImage.setAttribute("src", "images/cat.jpg");
  } else {
    myImage.setAttribute("src", "images/cat3.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "What kinds of cats you like ?  " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
}  

myButton.onclick = function () {
    setUserName();
};