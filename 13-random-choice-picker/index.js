const textarea=document.getElementById('textareaid');
const container=document.getElementsByClassName('container')[0];
const allchoices=document.getElementsByClassName('allchoices')[0];
textarea.addEventListener("input",createtherandomarray)
let choicesarr;

  
function createtherandomarray(event){
  choicesarr=event.target.value.split(",");
  const lengtharr=choicesarr.length;
  allchoices.innerHTML='';
  for(let i=0;i<lengtharr;i++){
    if(choicesarr[i]!==''){
        const createelement=document.createElement("span")
        createelement.classList.add("choice")
        createelement.innerHTML=choicesarr[i];
        allchoices.appendChild(createelement)
    }
  }
}
function selectrandom(event){
    
    if(event.key=='Enter'){
     event.preventDefault(); 
     textarea.disabled=true;
     const tellingstatus=document.createElement("div")
     tellingstatus.innerHTML='Drum roll your random choice will be '
     tellingstatus.classList.add("choicepicked")
     choicesarr=choicesarr.filter((item)=>{return item!=""})
    
     const blink=setInterval(blinking,300)
     setTimeout(()=>{finishpick(blink)},5000)
     allchoices.prepend(tellingstatus)
    }
}

function blinking(){

let subchoices=document.querySelectorAll('.choice')
const lengtharr=subchoices.length;
for(let i=0;i<lengtharr;i++){
subchoices[i].id=''    
}
subchoices[Math.floor(Math.random()*subchoices.length)].id='choiceblink'

}
function finishpick(blink){
clearInterval(blink)
let subchoices=document.querySelectorAll('.choice')
const lengtharr=subchoices.length;
for(let i=0;i<lengtharr;i++){
    subchoices[i].id=''    
}
subchoices[Math.floor(Math.random()*subchoices.length)].id='choiceblink'
textarea.disabled=false;
}
