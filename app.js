const plus1Btn= document.querySelector("#plus1Btn");
const plus2Btn= document.querySelector("#plus2Btn");
const ResetBtn= document.querySelector("#ResetBtn");

const p1Display= document.querySelector("#p1Display");
const p2Display= document.querySelector("#p2Display");

const playTo= document.querySelector("#playTo");

let p1Score=0;
let p2Score=0;
let winningScore=parseInt(playTo.value);
let isGameOver=false;

plus1Btn.addEventListener("click", function(){
    if(!isGameOver){
        p1Score+=1;
        if(p1Score===winningScore){
            isGameOver=true;
            p1Display.classList.add("win");
            p2Display.classList.add("lose");
        }
        p1Display.textContent=p1Score;
    }
})

plus2Btn.addEventListener("click", function(){
    if(!isGameOver){
        p2Score+=1;
        if(p2Score===winningScore){
            isGameOver=true;
            p2Display.classList.add("win");
            p1Display.classList.add("lose");
        }
        p2Display.textContent=p2Score;
    }
})

playTo.addEventListener("change",function(){
    winningScore= parseInt(this.value)
    reset()   
})

ResetBtn.addEventListener("click", reset)


function reset(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    p1Display.classList.remove("win");
    p2Display.classList.remove("lose");
    p2Display.classList.remove("win");
    p1Display.classList.remove("lose");
}