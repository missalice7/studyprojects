//What pc chooses
function computerPlay(){
    let pcHand = ["rock", "paper","scissors"]
    let getHand = pcHand[Math.floor(Math.random() * pcHand.length)];
    return getHand;
}



// SEPARATION LETS
let playerScore = 0;
let computerScore = 0;
let round = 0;

let playerScoreText = document.getElementById("playerScore")
let computerScoreText = document.getElementById("computerScore")

let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById("paper");
let scissorsbtn = document.getElementById("scissors");


// LET'S PLAY

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay()

    if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore +=1
        round+=1
        playerScoreText.innerHTML = playerScore

    }if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore +=1
        round+=1
        playerScoreText.innerHTML = playerScore
    }if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore +=1
        round+=1
        playerScoreText.innerHTML = playerScore
    }if(playerSelection == computerSelection){
        round+=1
    }else{
        round+=1
        computerScore +=1
        computerScoreText.innerHTML = computerScore
    }
    
}