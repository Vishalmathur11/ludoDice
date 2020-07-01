
var randomNumber = Math.floor( Math.random() * 6 ) + 1 ;

var randomDiceImage = "images/dice" + randomNumber + ".png"; 

document.querySelector("img").setAttribute("src", randomDiceImage);

