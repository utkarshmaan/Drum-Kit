//detect button press

var drumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<drumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    
    // it will change the text color when the button is clicked
    //this.style.color="white";
    var pressedbutton=this.innerHTML;
    makesound(pressedbutton);
    animation(pressedbutton);
}
)
}


//detect keyboard press
document.addEventListener("keypress", function(event){
    makesound(event.key);
    animation(event.key);
})



function makesound(key){
    switch(key){
        case "w":
            // this code is used to play audio in website
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
         var tom2=new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;

         case "s":
         var tom3=new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;

         case "d":
         var tom4=new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;

         case "j":
         var snare=new Audio("sounds/snare.mp3");
         snare.play();
         break;

         case "k":
         var crash=new Audio("sounds/crash.mp3");
         crash.play();
         break;

         case "l":
         var kick=new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;

         default:
             console.log(pressedbutton);

    }
}

function animation(currentkey){
var activebtn=document.querySelector("."+currentkey).classList.add("pressed");
activebtn.classList.add("pressed");

setTimeout( function() {
        activebtn.classList.remove("pressed");
    },100);

}







//...........does the same thing .............
// document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
// }
// function clicked(){
//     alert("i got clicked");
// }