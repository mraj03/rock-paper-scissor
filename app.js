

function getComputerChoice(){   
    let moves = ['rock', 'paper', 'scissor'];
    let computerMove = moves[Math.floor(Math.random() * moves.length)]
    return computerMove;
}

function humanPlay() {
    humanChoice = prompt('Please choose and write from "Rock", "Paper" or "Scissor"').toLowerCase();
    return humanChoice;
}


function playRound (playerSelection, computerSelection) {

    playerSelection = humanPlay();
    computerSelection = getComputerChoice();
    console.log('Your selection is: ' + playerSelection);
    console.log('Computer selection is: ' + computerSelection);

    switch (playerSelection + computerSelection) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            return 'Tie. Both show same value.'; 
            break;
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
            return "Computer wins";
            break;
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            return "You win";
            break;
    }
}



function game (numberRounds) {
    let humanWins = 0;
    let computerWins = 0;
    let Draw = 0;

    for (let i = 0; i < numberRounds; i++){
        round = i + 1;
        
        let gameResults = playRound(humanPlay(), getComputerChoice());
        console.log("Round "+ round + "\n" + "Human plays " + humanPlay() + " : Computer plays " + getComputerChoice()  + " \n" + gameResults );
    }
    
    if (gameResults === "Human wins") {
        humanWins++;
    }
    else if (gameResults === "Computer wins") {
        computerWins++;
    }
    else if (gameResults === "Draw") {
        Draw++;
    }

    if (humanWins > computerWins) {
        return ("Human Wins " + humanWins + " - " + computerWins )
    }
    else if (computerWins > humanWins) {
        return ("Computer Wins " + computerWins + " - " + humanWins)
    }
    else {
        return ("Match Drawn - Play again")
    }
}

console.log(game(5));

