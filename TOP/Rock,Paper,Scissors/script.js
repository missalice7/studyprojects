
//What pc chooses
function computerPlay(){
    let hand = ["rock", "paper","scissors"]
    let getHand = hand[Math.floor(Math.random() * hand.length)];
    return getHand;
}


//Determine win/lose/tie

function playRound(playerSelection, computerSelection){
    return (playerSelection == "rock" && computerSelection == "scissors") ? "win"
    :(playerSelection == "paper" && computerSelection == "rock") ? "win"
    :(playerSelection == "rock" && computerSelection == "scissors") ? "win"
    :(playerSelection == computerSelection) ?  "tie"
    :"lose"
    
}


let playerScore = 0;
let computerScore = 0;

let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById("paper");
let scissorsbtn = document.getElementById("scissors");

let handChoice = "none"

    rockbtn.onclick = () => handChoice = "rock"
    paperbtn.onclick = () => handChoice = "paper"
    scissorsbtn.onclick = () => handChoice = "scissors"

//START

const btnstart = document.getElementById("btnstart")

btnstart.onclick = function game(){

    btnstart.innerText = "Your started a round of five!";
    let subtitle = document.getElementById("subtitle")
    
    

    

        subtitle.innerText =`This is your round number 1. Pick your choice`;
        let playerSelection = handChoice
        let computerSelection = computerPlay()
        

        let play = playRound(playerSelection, computerSelection)
        

        function resultLog(){
            return   (play == "win") ? "You won!"  
            : (play == "lose") ? "You lost."
            : "It's a tie"
        }
        function getScore(){
            return (play == "win") ? playerScore = playerScore + 1
            : (play == "lose") ? computerScore = computerScore + 1
            : null
        }

        console.log(resultLog())
        getScore()
        console.log(playerScore)
       console.log (computerScore)
        
    

    function roundScore(){
        return (playerScore > computerScore) ? "You win the round!"
        :(playerScore < computerScore) ? "You lose the round"
        :"It's a tie for the round"
    }

    console.log(roundScore())
}

//console.log(game())
