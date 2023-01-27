const twittercount=document.getElementById("twitter-count")
const youtubecount=document.getElementById("youtube-count")
const facebookcount=document.getElementById("facebook-count")
window.onload=()=>{
    const twitterclear=setInterval(()=>{
        twittercount.innerHTML=parseInt(twittercount.innerHTML)+100;
    },20)
    setTimeout(()=>{clearInterval(twitterclear)},2400)
    
    const youtubeclear=setInterval(()=>{
        youtubecount.innerHTML=parseInt(youtubecount.innerHTML)+100;
    },20)
    setTimeout(()=>{clearInterval(youtubeclear)},1000)

    const facebookclear=setInterval(()=>{
        facebookcount.innerHTML=parseInt(facebookcount.innerHTML)+100;
    },20)
    setTimeout(()=>{clearInterval(facebookclear)},1500)
}
//formula followercount=(val1*val2)/4
//eg:youtube follower count=(20*1000)/4

