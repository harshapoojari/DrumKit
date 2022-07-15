var l=document.querySelectorAll(".drum").length;
for(var i=0;i<l;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",beat);
  
    
}
function beat(){
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  animation(buttonInnerHTML);
}
document.addEventListener("keypress",function(event){
 makeSound(event.key);
animation(event.key);
})


function makeSound(value){
    switch(value)
    {
      case "W":var audio1=new Audio("tom-1.mp3");
              audio1.play();
              break;
      case "A":var audio2=new Audio("tom-2.mp3");
               audio2.play();
               break;
      case "S":var audio3=new Audio("tom-3.mp3");
               audio3.play();
               break;
      case "D":var audio4=new Audio("tom-4.mp3");
              audio4.play();
              break;
      case "J":var audio5=new Audio("crash.mp3");
              audio5.play();
              break;
      case "K": var audio6=new Audio("kick-bass.mp3");
      audio6.play();
      break;
      case "L":var audio7=new Audio("snare.mp3");
      audio7.play();
      break;
      default:console.log();
    
  
  
  
  }
}
function animation(value){

    var pop=document.querySelector("."+value);
    pop.classList.add("anime");
    setTimeout(function(){
        pop.classList.remove("anime")
    },100);

}