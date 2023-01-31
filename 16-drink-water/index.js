let waterfillingvalue=0;
let wateremptyspacevalue=0;
const glasses=document.querySelectorAll('.mini-glass');
const emptyspace=document.querySelectorAll('.emtpy-space')[0];
const waterfilling=document.querySelectorAll('.water-filling')[0];
const waterfillingvaluediv=document.querySelectorAll('.water-filling-value')[0];
const emptyfillingvaluediv=document.querySelectorAll('.main-glass-value')[0];
glasses.forEach((glass)=>{
    glass.addEventListener("click",glasshandler);
})

function glasshandler(){
    
    if(waterfillingvalue/10==parseInt(this.id)){
        //if clicked on top most element remove it 
        this.classList.remove('add-mini-glass-color')
        waterfillingvalue=waterfillingvalue-10;
        wateremptyspacevalue=100-waterfillingvalue;
        repeatcode()
        return;
    }
    
    for(let i=0;i<glasses.length;i++){
        glasses[i].classList.remove('add-mini-glass-color')
    }
    for(let i=0;i<parseInt(this.id);i++){
        glasses[i].classList.add('add-mini-glass-color')
    }
    for(let i=0;i<=glasses.length;i++){
        if(this.id===""+i){
            waterfillingvalue=10*i;
            wateremptyspacevalue=100-waterfillingvalue;
        }
    }
    repeatcode()
}

function repeatcode(){
    if(wateremptyspacevalue==100){
        emptyspace.style.height=""+wateremptyspacevalue+"%";
        waterfilling.style.height=""+waterfillingvalue+"%";
    }
    if(waterfillingvalue>0){
        emptyspace.style.height=""+wateremptyspacevalue+"%";
        waterfilling.style.height=""+waterfillingvalue+"%";
    }
    //check for visibilty in corner cases
    if(wateremptyspacevalue===0){
        emptyspace.style.visibility="hidden";
    }
    else{
        emptyspace.style.visibility="visible";
    }
    if(waterfillingvalue===0){
        waterfilling.style.visibility="hidden";
    }
    else{
        waterfilling.style.visibility="visible";
    }
    //to show the vlaues in main glass
    waterfillingvaluediv.innerHTML=waterfillingvalue+"%";
    emptyfillingvaluediv.innerHTML=(wateremptyspacevalue*3/100)+"L";
    
}
