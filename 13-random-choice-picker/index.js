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
     tellingstatus.innerHTML='Drum roll your random choice is '
     tellingstatus.classList.add("choicepicked")
     choicesarr=choicesarr.filter((item)=>{return item!=""})
    
     const blink=setInterval(blinking,10000)
     setTimeout(()=>{finishpick(blink)},200000)
     allchoices.prepend(tellingstatus)
    }
}

function blinking(){

let subchoices=document.querySelectorAll('.choice')
const lengtharr=subchoices.length;
let rotate=0;
for(let i=0;i<lengtharr;i++){
    subchoices[i].id='choiceblink'
    console.log('blinking1')
    console.log(subchoices[i].id);
    sleepFor(500)
    console.log('blinking2')
    subchoices[i].id=''
    sleepFor(500)
}
}
function finishpick(blink){
clearInterval(blink)
console.log('finished')
}
function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
}