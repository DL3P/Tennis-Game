const plus1Btn= document.querySelector("#plus1Btn");
const plus2Btn= document.querySelector("#plus2Btn");
const ResetBtn= document.querySelector("#ResetBtn");

const p1Display= document.querySelector("#p1Display");
const p2Display= document.querySelector("#p2Display");

let p1Score=0;
let p2Score=0;
let winningScore=5;

plus1Btn.addEventListener("click", function(){
    if(p1Score!==winningScore && p2Score!==winningScore){
        p1Score+=1;
        p1Display.textContent=p1Score;
    }
})

plus2Btn.addEventListener("click", function(){
    if(p2Score!==winningScore && p1Score!==winningScore){
        p2Score+=1;
        p2Display.textContent=p2Score;}
    })

ResetBtn.addEventListener("click", function(){
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
})

