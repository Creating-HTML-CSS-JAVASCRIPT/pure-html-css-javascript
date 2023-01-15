window.addEventListener("load",unblur)

function unblur(){
    const image=document.getElementsByClassName("image");
    image[0].className='newimage'
    console.log('hello world')
}