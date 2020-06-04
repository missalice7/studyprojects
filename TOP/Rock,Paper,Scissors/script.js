//What pc chooses
function computerPlay(){
    let hands = ["rock", "paper","scissors"]
    let getHand = hands[Math.floor(Math.random() * hands.length)];
    return getHand;
}


// VARIABLES
let playerScore = 0;
let computerScore = 0;
let round = 0;

let playerScoreText = document.getElementById("playerScore");
let computerScoreText = document.getElementById("computerScore");
let roundScoreText = document.getElementById("round-score");

let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById("paper");
let scissorsbtn = document.getElementById("scissors");


// LET'S PLAY

function playRound(playerSelection, computerSelection){

    computerSelection = computerPlay()

    if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore +=1;
        round+=1;
        playerScoreText.innerHTML = playerScore;
        roundScoreText.innerHTML = "You win this round!";
        finishRound()
        return;

    }if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore +=1;
        round+=1;
        playerScoreText.innerHTML = playerScore;
        roundScoreText.innerHTML = "You win this round!";
        finishRound()
        return;

    }if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore +=1;
        round+=1;
        playerScoreText.innerHTML = playerScore;
        roundScoreText.innerHTML = "You win this round!";
        finishRound()
        return;

    }if(playerSelection === computerSelection){
        round+=1;
        roundScoreText.innerHTML = "It's a tie.";
        finishRound()
        return;
    }else{
        round+=1
        computerScore +=1
        computerScoreText.innerHTML = computerScore;
        roundScoreText.innerHTML = "Player 2 wins this round.";
        finishRound()
        return;
    }

    
}

// FINISH

function finishRound(){
    if(round === 5){
        rockbtn.disabled = true;
        paperbtn.disabled = true;
        scissorsbtn.disabled = true;
        return;
    }
    return;
}