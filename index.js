//   document.getElementsByClassName("set")[0].addEventListener("click",function (){
//     var audio=new Audio('sounds/tom-1.mp3');
//     audio.play();
// });


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonval=this.innerHTML;
        makeSound(buttonval);  
        buttonanimation(buttonval);
    });
        
    
}

document.addEventListener("keypress",function(event){
    
    var bkey=event.key;
    makeSound(bkey);
    buttonanimation(bkey);
    
});

function makeSound(val){
    
    switch (val) {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;  
        case "j":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "l":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

    }

}

function buttonanimation(pressedkey){
    var activeButton = document.querySelector("."+pressedkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    
}