const ripplebutton=document.getElementsByClassName('ripple-button')[0];
const growingcircle=document.getElementsByClassName('temp')[0];
ripplebutton.addEventListener('click',addgrowingcircle);
function addgrowingcircle(event){
    let x=event.offsetX;
    let y=event.offsetY;

    growingcircle.style.top=""+y+"px";
    growingcircle.style.left=""+x+"px";
    growingcircle.classList.add('growing-circle')
    setTimeout(removeclass,500)
}
function removeclass(){
growingcircle.classList.remove('growing-circle')
}