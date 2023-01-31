let waterfillingvalue=0;
let wateremptyspacevalue=0;
const glasses=document.querySelectorAll('.mini-glass');
const emptyspace=document.querySelectorAll('.emtpy-space')[0];
const waterfilling=document.querySelectorAll('.water-filling')[0];
glasses.forEach((glass)=>{
    glass.addEventListener("click",glasshandler);
})

function glasshandler(){
    if(waterfillingvalue/10==parseInt(this.id)){
        
        this.classList.remove('add-mini-glass-color')
        waterfillingvalue=waterfillingvalue-10;
        wateremptyspacevalue=100-waterfillingvalue;
        
        repeatcode()
        if(waterfillingvalue==0){
            console.log(waterfilling)
            waterfilling.classList.add('water-filling-empty')
            
        }
        return;
    }
    for(let i=0;i<glasses.length;i++){
        glasses[i].classList.remove('add-mini-glass-color')
    }
    for(let i=0;i<parseInt(this.id);i++){
        glasses[i].classList.add('add-mini-glass-color')
    }
    
    for(let i=1;i<=glasses.length;i++){
        if(this.id===""+i){
            waterfillingvalue=10*i;
            wateremptyspacevalue=100-waterfillingvalue;
        }
    }
    
    repeatcode()

}

function repeatcode(){
    if(waterfillingvalue==100){
        emptyspace.classList.add('emtpy-space-zero')
        
    }
    if(waterfillingvalue>0){
        waterfilling.classList.remove('water-filling-empty')
        emptyspace.style.height=""+wateremptyspacevalue+"%";
        waterfilling.style.height=""+waterfillingvalue+"%";
    }
}
