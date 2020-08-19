var buttonList = document.querySelectorAll(".drum");

for(var i=0;i<buttonList.length;i++){
    buttonList[i].addEventListener("click",function(){
        //To print on the console:
        // console.log(this);

        //this refer to the current html elemt that has triggered the event:
        makeSound(this.textContent);

        animation(this.textContent);
    });
}

document.addEventListener("keypress", function (event){
    // To print on the console:
    console.log(event);

    // event gives the entire detail about the event that has happedned:
    // Key that has pressed:
    makeSound(event.key);

    animation(event.key);
});

//For producing sound:
function makeSound(key) {

    //Basic switch case:
    switch (key) {
        case "W":
        case "w":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
    
        case "A":
        case "a":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "S":
        case "s":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "D":
        case "d":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
        break; 
           
        case "J":
        case "j":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        
        case "K":
        case "k":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "L":
        case "l":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        default:
            break;
    }   
} 

//For animation or changing style:
function animation(key){
    //Adding dot because it is a class name of the element we are targeting:
    var node=document.querySelector("." + key);

    node.classList.add("pressed");

    setTimeout(function(){
        node.classList.remove("pressed");
    },100);
}

