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