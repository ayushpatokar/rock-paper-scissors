let choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector("#score1");
let compScorePara = document.querySelector("#score2");
let result = document.querySelector(".result");



 
let genCompChoice = ()=>{
    let value = Math.floor(Math.random()*3);
    if(value === 0){
        compChoice = "rock";
    }else if(value === 1){
        compChoice = "paper";
    }else{
        compChoice = "scissors";
    }
    return compChoice;
}    



let checkWinner = (userChoice, compChoice)=>{
    if (userChoice === compChoice) {
    result.innerText = "Draw!";
    result.style.backgroundColor = "rgb(43, 30, 87)";
} else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
) {
    result.innerText = "You win!";
    result.style.backgroundColor = "green";
    userScore++;
} else {
    result.innerText = "You lose. Try again";
    result.style.backgroundColor = "red";
    compScore++;
}
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
}

choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            let userChoice = choice.id;
            let compChoice = genCompChoice();
            checkWinner(userChoice, compChoice);
        });
    });
