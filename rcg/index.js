const containerEl=document.querySelector(".container");
const formEl=document.getElementById("form");
let val;
function getvalue(){
    let input=document.getElementById("numberOfColor");
    let inputVal=input.value;
    val=parseInt(inputVal);
}

formEl.addEventListener('submit',function(event){
    event.preventDefault();
    getvalue();
for (let index = 0; index < val; index++) {
    const colorContainerEl=document.createElement("div");
    colorContainerEl.classList.add('color-container','rounded-lg','shadow')
    containerEl.appendChild(colorContainerEl)
    }
    const colorContainerElS=document.querySelectorAll('.color-container','.rounded-lg','.shadow');
    appendColor()
    function appendColor(){
        colorContainerElS.forEach((colorContainerEl) =>{
                  const newColorCode=getColorCode()
                  colorContainerEl.style.backgroundColor="#"+newColorCode;
                  colorContainerEl.innerText="#"+newColorCode;
        }
        )
    }
}
)
function getColorCode()
{
    const chars = '0123456789abcdef'
    const colorCodeLength = 6
    let colorCode = ''
    for(let index=0; index<colorCodeLength; index++)
    {
        const randomNum = Math.floor(Math.random()*chars.length)
        colorCode += chars.substring(randomNum,randomNum+1);
    }
    return colorCode   
}