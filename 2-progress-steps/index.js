
const allanchors=document.querySelectorAll('.oldclass');
const numofanchors=allanchors.length;
const alllines=document.querySelectorAll('.lineoldclass');
const numoflines=alllines.length;
const prevbutton=document.getElementById('prev');
const nextbutton=document.getElementById('next');
let curranchor=allanchors[0];
let anchorpointer=0;
let currline=alllines[0];
let linepointer=0;
curranchor.className='newclass'

function dealwithbuttondisable(){
    if(anchorpointer==numofanchors-1){
        nextbutton.disabled=true;
    }
    else{
        nextbutton.disabled=false;
    }
    if(anchorpointer==0){
    prevbutton.disabled=true;
    }
    
    else{ 
        prevbutton.disabled=false;
    }
}

function Next(){
if(anchorpointer<numofanchors && linepointer<numoflines){
 anchorpointer++;
 allanchors[anchorpointer].className='newclass';
 alllines[linepointer].className='linenewclass';
 linepointer++;
}
dealwithbuttondisable()
}
function Prev(){
    if(anchorpointer>0 && linepointer>0){
        allanchors[anchorpointer].className='oldclass'
        anchorpointer--;
        linepointer--;
        alllines[linepointer].className='lineoldclass'
    }
    else{
        console.log('reached the start '+anchorpointer+" "+linepointer)
    }
    dealwithbuttondisable()
}