//What pc chooses
function computerPlay(){
    let pcHand = ["rock", "paper","scissors"]
    let getHand = pcHand[Math.floor(Math.random() * hand.length)];
    return getHand;
}



// SPARATION LETS
let playerScore = 0;
let computerScore = 0;
let round = 0

let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById("paper");
let scissorsbtn = document.getElementById("scissors");

rockbtn.onclick = playRound("rock", computerSelection)
paperbtn.onclick = playRound("paper", computerSelection)
scissorsbtn.onclick =  playRound("rock", computerSelection)

// LET'S PLAY

function playRound(playerSelection, computerSelection){
    let computerSelection = computerPlay()

    (playerSelection == "rock" && computerSelection == "scissors") ? "win"
    

    :(playerSelection == "paper" && computerSelection == "rock") ? "win"


    :(playerSelection == "rock" && computerSelection == "scissors") ? "win"


    :(playerSelection == computerSelection) ?  "tie"


    :"lose"
    
}