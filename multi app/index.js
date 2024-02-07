const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)

let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}

const questionEL = document.getElementById("question");

const formEl=document.getElementById("form")

const inputEl=document.getElementById("input")

const scoreEl=document.getElementById("score")
scoreEl.innerText=`score=${score}`

questionEL.innerText=`what is ${num1} * ${num2}?`;
const correctAns=num1*num2;

formEl.addEventListener("submit",() =>{
    const userAns=+inputEl.value
    if(userAns===correctAns){
        score++
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
});

function updateLocalStorage(){
    localStorage.setItem("scor",JSON.stringify(score))
}


