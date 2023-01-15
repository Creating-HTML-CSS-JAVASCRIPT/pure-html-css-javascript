let firsthalf=document.getElementById('firsthalf')
let secondhalf=document.getElementById('secondhalf');
let img1=document.getElementById('img1');
let img2=document.getElementById('img2')
firsthalf.addEventListener("mouseover",enlarge)
firsthalf.addEventListener("mouseout",equalize)
secondhalf.addEventListener("mouseover",enlarge)
secondhalf.addEventListener("mouseout",equalize)
function equalize(){
    img1.className=''
    img2.className=''
    
}
function enlarge(){

    if(this.id=='firsthalf')
    {
        img2.className='newimage2'
        img1.className='newimage1'   
    }
    if(this.id==='secondhalf'){
        img1.className='newimage3'
        img2.className='newimage4'
    }
    

}
