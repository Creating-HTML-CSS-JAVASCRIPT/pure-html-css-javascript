const container=document.querySelectorAll('.container')[0]
const initial=document.getElementById('initial')
let first=true;
let boxhead1=document.createElement("div")
let boxhead2=document.createElement("div")
let boxhead3=document.createElement("div")
let box1=document.createElement("div");
let box2=document.createElement("div");
let box3=document.createElement("div");

let cbox1=document.createElement("div");
let cbox2=document.createElement("div");
let cbox3=document.createElement("div");

boxhead1.innerHTML="event.key"
boxhead2.innerHTML="event.keyCode"
boxhead3.innerHTML="event.code"
cbox1.appendChild(boxhead1)
cbox1.appendChild(box1)
cbox2.appendChild(boxhead2)
cbox2.appendChild(box2)
cbox3.appendChild(boxhead3)
cbox3.appendChild(box3)
box1.classList.add("boxes")
box2.classList.add("boxes")
box3.classList.add("boxes")
boxhead1.classList.add("box-header")
boxhead2.classList.add("box-header")
boxhead3.classList.add("box-header")
window.addEventListener("keydown",bodykey)
function bodykey(event){
    if(first){
        first=false;
        initial.remove();
        box1.innerHTML=""+event.key;
        box2.innerHTML=""+event.keyCode;
        box3.innerHTML=""+event.code;
        console.log(event)
        container.appendChild(cbox1)
        container.appendChild(cbox2)
        container.appendChild(cbox3)
    }
    else{
        box1.innerHTML=""+event.key;
        box2.innerHTML=""+event.keyCode;
        box3.innerHTML=""+event.code;
    }
}
