let theme='dark';
const themebutton=document.getElementById('theme-button');
const digitalclock=document.getElementsByClassName('digital-clock')[0];
const digitaldate=document.getElementsByClassName('digital-date')[0];
const hourhand=document.getElementById('hour');
const minutehand=document.getElementById('minute');
const secondhand=document.getElementById('second');
const centercircle=document.getElementById('center-circle');
const body=document.getElementsByTagName('body')[0];

function showdigitalclock() {
    const currdate=new Date().toLocaleTimeString();
    const digitaldate=new Date().toDateString();
    digitalclock.innerHTML=currdate.substring(0,5)+currdate.substring(8,11)}

function showanalogclock(){
const currdate=new Date().toLocaleTimeString();
let deg=currdate.split(":");
let finalsec=-90+parseInt(deg[2].split(" ")[0])*6;
let finalminute=-90+parseInt(deg[1])*6+finalsec/60;
let finalhourhand=-90+parseInt(deg[0])*30+(finalminute/60)*6;
// console.log(finalsec,finalminute,finalhourhand)
secondhand.style.transform="rotate("+finalsec+"deg)";
minutehand.style.transform="rotate("+finalminute+"deg)";
hourhand.style.transform="rotate("+finalhourhand+"deg)";
}
setInterval(showdigitalclock,100);
setInterval(showanalogclock,100);

function changetheme(){
console.log('change theme')
if(theme=='dark'){
    
    body.style.backgroundColor='white';
    minutehand.style.backgroundColor='black';
    hourhand.style.backgroundColor='black';
    centercircle.style.backgroundColor='black';
    digitalclock.style.color='black';
    digitaldate.style.color='black';
    themebutton.innerHTML='light mode';
    themebutton.style.backgroundColor='black';
    themebutton.style.color='white';
    theme='light'
}
else{
    body.style.backgroundColor='black';
    minutehand.style.backgroundColor='white';
    hourhand.style.backgroundColor='white';
    centercircle.style.backgroundColor='white';
    digitalclock.style.color='white';
    digitaldate.style.color='white';
    themebutton.innerHTML='dark mode';
    themebutton.style.backgroundColor='white';
    themebutton.style.color='black';
    theme='dark'
}
}