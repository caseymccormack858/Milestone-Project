codefunction moveLeft(){
    left left =
    parseInt(windoiw.getComputedStyle(character).getPropertyValue("Left"));
    left -=100;
    if(left>=0){
    character.style.left = left + "px";
    }
}
function moveRight(){
    left left =
    parseInt(windoiw.getComputedStyle(character).getPropertyValue("Left"));
    left += 100;
    if(left<300){
    character.style.left = left + "px";
    }
}
document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
    });
    var block = document.getElelemntById("block");
var counter = 0;
block.addEventListener('animationiteration',()
= > {
    var random = Math.floor(Math.random() *3);
    left = random * 100;
    block.style.left = left = "px";
    counter++;
});
setInterval(function(){
    var characterLeft = 
    parseInt(window.getComputedStyle(character)
    .getPropertyValue("left"));
    var blockleft = 
    parseInt(window.getComputedStyle(block)
    .getPropertyValue("left"));
    var blockTop = 
    parseInt(window.getComputedStyle(block)
    .getPropertyValue("top"));
    if(characterLeft == blockLeft && 
        blockTop<500&&
        blockTop>300){
         