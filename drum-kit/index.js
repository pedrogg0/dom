function reproduceSound(input) {
    switch (input) {
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        default:
            console.log(input);
            break;
    }
};

function buttonAnimation(input){
    var currentButton = document.querySelector("." + input);
    currentButton.classList.add("pressed");

    setTimeout(function(){
        currentButton.classList.remove("pressed");
    }, 100);
}
    
var drums = document.querySelectorAll(".drum");
for(var i = 0 ; i < drums.length ; i++){
    drums[i].addEventListener("click",  function (){
        reproduceSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (e){
   reproduceSound(e.key);
   buttonAnimation(e.key);
});

