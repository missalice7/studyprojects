
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

//START
function game(){

    for (let i = 0; i < 5; i++) {
    

        const playerSelection = prompt("Rock Paper Scissors").toLowerCase()
        const computerSelection = computerPlay()
        

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
        //console.log(playerScore)
       // console.log (computerScore)
        
    }

    function roundScore(){
        return (playerScore > computerScore) ? "You win the round!"
        :(playerScore < computerScore) ? "You lose the round"
        :"It's a tie for the round"
    }

    console.log(roundScore())
}

console.log(game())
