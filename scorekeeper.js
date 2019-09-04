var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameover = false;
var winningScore = 5;

// Command for P1 button

p1Button.addEventListener("click", function(){
    if(!gameover){ 
    p1Score++;
    console.log(p1Score, winningScore);
    if(p1Score === winningScore){
    p1Display.classList.add("winner");
    gameover = true;
    }
 
    p1Display.textContent = p1Score;
}
});

// Command for P2 button

p2Button.addEventListener("click", function(){
    if(!gameover){
    p2Score++;
    if(p2Score === winningScore){
    p2Display.classList.add("winner");
    gameover = true;
    }
    p2Display.textContent = p2Score;
    }
});



// Command for Reset button

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameover = flase;
}



//Number Input Command

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
});