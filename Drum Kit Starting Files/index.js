buttonArray = document.querySelectorAll(".drum");

document.querySelector
for (i=0; i< buttonArray.length;i++){
    buttonArray[i].addEventListener("click",
    function (){
        var keyValue = this.innerHTML
        event_checker(keyValue);
        animatedKey(keyValue);
});}

document.addEventListener("keydown",function(event){
    var keyValue = event.key;
    event_checker(keyValue);
    animatedKey(keyValue);
})



function event_checker(keyValue) {
    switch (keyValue) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;                                              
        default:
            console.log(this.innerHTML);
    };
}

function animatedKey(key) {
    var clicked = document.querySelector("."+key)
    clicked.classList.add("pressed")
    setTimeout(function(){clicked.classList.remove("pressed")}, 100)
}