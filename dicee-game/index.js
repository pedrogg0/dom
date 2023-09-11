var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);

randomNumber2 = Math.floor(Math.random() * 6 + 1);
randomDiceImage = "dice" + randomNumber2 + ".png";
randomImageSource = "images/" + randomDiceImage;

image2.setAttribute("src", randomImageSource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "&#127881; Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! &#127881;";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
