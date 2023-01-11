let allelements=document.querySelectorAll(".oldclass")

allelements[0].className='newclass'
let globalcurrentimagetracker=allelements[0];
let arrsize=allelements.length;
for(let i=0;i<arrsize;i++){
allelements[i].addEventListener("click",swapclass)
}
function swapclass(){
if(this!=globalcurrentimagetracker){
this.className='newclass'
globalcurrentimagetracker.className='oldclass'
globalcurrentimagetracker=this;
}
}

