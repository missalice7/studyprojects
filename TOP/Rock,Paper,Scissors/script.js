//What pc chooses
function computerPlay(){
    let hands = ["rock", "paper","scissors"]
    let getHand = hands[Math.floor(Math.random() * hands.length)];
    return getHand;
}


// VARIABLES
let playerScore = 0;
let computerScore = 0;
let round = 1;

let title = document.getElementById("title_start");
let roundText = document.getElementById("round_update");
let playerScoreText = document.getElementById("player_score");
let computerScoreText = document.getElementById("computer_score");
let roundScoreText = document.getElementById("round_score");

let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById("paper");
let scissorsbtn = document.getElementById("scissors");
let resetbtn = document.getElementById("reset");


// LET'S PLAY

function playRound(playerSelection, computerSelection){

    computerSelection = computerPlay()
    roundScoreText.classList.add("show_score");

    if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore +=1;
        round+=1;
        playerScoreText.innerHTML = playerScore;
        roundText.innerHTML = round;
        roundScoreText.innerHTML = "You win this round!";
        finishRound()
        return;

    }if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore +=1;
        round+=1;
        playerScoreText.innerHTML = playerScore;
        roundText.innerHTML = round;
        roundScoreText.innerHTML = "You win this round!";
        finishRound()
        return;

    }if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore +=1;
        round+=1;
        playerScoreText.innerHTML = playerScore;
        roundText.innerHTML = round;
        roundScoreText.innerHTML = "You win this round!";
        finishRound()
        return;

    }if(playerSelection === computerSelection){
        round+=1;
        roundText.innerHTML = round;
        roundScoreText.innerHTML = "It's a tie.";
        finishRound()
        return;
    }else{
        round+=1
        computerScore +=1
        computerScoreText.innerHTML = computerScore;
        roundText.innerHTML = round;
        roundScoreText.innerHTML = "AI wins this round.";
        finishRound()
        return;
    }

    
}

// FINISH

function finishRound(){
    if(round === 6){
        rockbtn.disabled = true;
        paperbtn.disabled = true;
        scissorsbtn.disabled = true;
        title.innerHTML = "GAME OVER";
        resetbtn.style.visibility = "visible";
        if(playerScore>computerScore){
            roundScoreText.innerHTML = "PunyHuman got lucky. Pfft"
            return;
        }if(computerScore>playerScore){
            roundScoreText.innerHTML = "You lost to the AI invasion"
            return;
        }else{
            roundScoreText.innerHTML = "A tie. For now puny human."
            return;
        }
        return;
    }
    return;
}

function resetGame(){
    location.reload()
}