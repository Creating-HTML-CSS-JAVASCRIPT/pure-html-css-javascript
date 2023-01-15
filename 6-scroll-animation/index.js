let allcontent=Array.from(document.querySelectorAll('.content'));
scrollupdater();
window.onscroll = scrollupdater;

function scrollupdater() { 
    let bottomofwindow=window.innerHeight*0.9; 
    allcontent.forEach((content)=>{
        if(content.getBoundingClientRect().top<bottomofwindow){
            content.className='contentnew'
        }
        else{
            content.className='content'
        }
    })
} 
    