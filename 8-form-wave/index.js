const input1=document.getElementById('input1')
const input2=document.getElementById('input2')
const wave1=[...document.getElementsByClassName("wave1")]
const wave2=[...document.getElementsByClassName("wave2")]
input1.addEventListener("focus",moveup)
input2.addEventListener("focus",moveup)
input1.addEventListener("focusout",movedown)
input2.addEventListener("focusout",movedown)
let gap=50;
function moveup(){
    if(this.id==='input1')
    {
        let x=0;
    wave1.forEach((each)=>{
        setTimeout(()=>{each.className='wave1new'},x)   
        console.log(x)
        x+=gap;     
    })
    }
    if(this.id==='input2'){
        let x=0;
        wave2.forEach((each)=>{
            setTimeout(()=>{each.className='wave2new'},x)   
            x+=gap;
        })
    }
}
function movedown(){
    if(this.id==='input1')
    {
        let x=0;
    wave1.forEach((each)=>{
        setTimeout(()=>{each.className='wave1'},x)   
        x+=gap;
    })
    }
    if(this.id==='input2'){
        let x=0;
        wave2.forEach((each)=>{
            setTimeout(()=>{each.className='wave2'},x)   
        x+=gap;
        })
    }
}