const container=document.querySelectorAll('.container')[0];


function flip(classlist,curr){

    if(classlist[0]==="fa-close"){
        curr.classList.remove("fa-close")
        curr.classList.add("fa-sort-down")
        classlist[0]="fa-sort-down"
    }
    else{
        curr.classList.remove("fa-sort-down")
        curr.classList.add("fa-close")
        classlist[0]="fa-close"
    }
}
function stylechanger(answershow,answer){

if(answershow[0]){
    answer.style.display="block"
    
    answershow[0]=false;
}
else{
    answer.style.display="none"
    answershow[0]=true;
}
}

function faq(Q,A){
    let classlist=["fa-sort-down"];
    let answershow=[false];
    const question=document.createElement("div")
    const answer=document.createElement("div")
    const packer=document.createElement("div")
    const smallpacker=document.createElement("div")
    const close=document.createElement("i")
    question.innerHTML=""+Q;
    answer.innerHTML=""+A;
    question.classList.add("question")
    answer.classList.add("answer")
    packer.classList.add("packer")
    smallpacker.classList.add("smallpacker")
    close.classList.add("fa")
    close.classList.add("fa-sort-down")
    close.style.fontSize="1.5rem"
    close.addEventListener("click",()=>{flip(classlist,close);stylechanger(answershow,answer)})
    smallpacker.appendChild(question)
    smallpacker.appendChild(close)
    packer.appendChild(smallpacker)
    packer.appendChild(answer)
    container.appendChild(packer)
    
    stylechanger(answershow,answer)
}
faq("why shouldn't we trust atoms?","They make up everything")
faq("what do you call someone with no body and no nose?","nobody knows")
faq("what ths object oriented way to become wealthy?","inheritance")
faq("what is :1+1?","Depends on who you are asking")