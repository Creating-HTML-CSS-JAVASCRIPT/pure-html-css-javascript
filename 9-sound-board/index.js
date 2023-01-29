const sounds=["applause","boo","gasp","tada","victory","wrong"]
const path="./sounds/"
const container=document.getElementById("container")
let currentlyplaying=""
sounds.forEach((sound)=>{
    const audio=document.createElement("audio");
    const button=document.createElement("div");
    button.innerHTML=sound;
    button.classList.add("sound-button")
    audio.id=sound;
    button.addEventListener("click",playsong)
    audio.src=path+sound+".mp3"
    container.append(button,audio)
   
})
function playsong(){
    if(currentlyplaying==""){
    
        
        const curraudio=document.getElementById(this.innerHTML);
        currentlyplaying=this.innerHTML
        curraudio.currentTime=0;
        curraudio.play()
    }
    else{
        const prevaudio=document.getElementById(currentlyplaying)
        prevaudio.pause()
       
        const curraudio=document.getElementById(this.innerHTML);
        currentlyplaying=this.innerHTML;
        curraudio.currentTime=0;
        curraudio.play()
    }

}