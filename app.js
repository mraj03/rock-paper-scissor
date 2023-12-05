let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choiceArr = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choiceArr[randomNumber];

    return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === 'rock' && computerSelection === 'rock'){
        return 'You tied! you both picked rock';
    } else if(playerSelection === 'paper' && computerSelection === 'paper'){
        return 'You tied! you both picked paper';
    } else if(playerSelection === 'scissor' && computerSelection === 'scissor'){
        return 'You tied! you both picked scissor';
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return 'You lost! paper covers rock';
    } else if(playerSelection === 'rock' && computerSelection === 'scissor'){
        playerScore++;
        return 'You win! rock beats paper';
    } else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        computerScore++;
        return 'You lost! scissor cuts paper';
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return 'You win! paper covers rock';
    } else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        playerScore++;
        return 'You win! scissor cuts paper';
    } else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        computerScore++;
        return 'You lost! rocks beats paper';
    }
} 

const game = () => {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('type your choice', 'Select either rock, or paper, or scissor').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(`1. player selection: `, `${playerSelection} `, `2. computer  selection:: `, `${computerSelection}`); 
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore){
        return 'You won, great job winning against the computer.';
    } else if(computerScore > playerScore){
        return `You lost! don't lose hope you need one win`;
    } else {
        return 'You tied with the computer. Hey, better than losing to it.'
    }
}




console.log(game());
