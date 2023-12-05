let playerScore = 0;
let computerScore = 0;
const rockbutton = document.querySelector('.rock');
const paperbutton = document.querySelector('.paper');
const scissorbutton = document.querySelector('.scissor');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

const getComputerChoice = () => {
    const choiceArr = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choiceArr[randomNumber];

    return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p');
    if(playerSelection === 'rock' && computerSelection === 'rock'){  
        p.innerText = `You  tied! You both picked ${playerSelection}`;
        outcomeDiv.append(p);
    } else if(playerSelection === 'paper' && computerSelection === 'paper'){
        p.innerText = `You tied! You both picked ${playerSelection}`;
        outcomeDiv.append(p);
    } else if(playerSelection === 'scissor' && computerSelection === 'scissor'){
        p.innerText = `You tied! You both picked ${playerSelection}`;
        outcomeDiv.append(p);
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        p.innerText  = `You lost! ${playerSelection}  covers ${computerSelection}`;
        outcomeDiv.append(p);
    } else if(playerSelection === 'rock' && computerSelection === 'scissor'){
        playerScore++;
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}`; 
        outcomeDiv.append(p);
    } else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        computerScore++;
        p.innerText = `You lost! ${playerSelection} cuts ${computerSelection}`;
        outcomeDiv.append(p);
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        p.innerText = `You win! ${playerSelection} covers ${computerSelection}`;
        outcomeDiv.append(p);
    } else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        playerScore++;
        p.innerText =  `You win! ${playerSelection} cuts ${computerSelection}`;
        outcomeDiv.append(p);
    } else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        computerScore++;
        p.innerText = `You lost! ${playerSelection} beats ${computerSelection}`;
        outcomeDiv.append(p);
    }
} 

const checkWinner = (playerScore, computerScore) => {
    if (playerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `You won ${playerScore} to ${computerScore}, great  job beating the computer!`;
        outcomeDiv.append(h2);
    } else if (computerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `You lost ${computerScore} to ${playerScore}, just clear your mind and try again!`;
        outcomeDiv.append(h2);
    }
}

const updateScore = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`;
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`;
}

rockbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock'.toLowerCase();
    updateScore(playerScore, computerScore);
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
})
paperbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper'.toLowerCase();
    updateScore(playerScore, computerScore);
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
})
scissorbutton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissor'.toLowerCase();
    updateScore(playerScore, computerScore);    
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
})

// const game = () => {
//     for(let i = 0; i < 5; i++){
//         const computerSelection = getComputerChoice();
//         console.log(`1. player selection: `, `${playerSelection} `, `2. computer  selection:: `, `${computerSelection}`); 
//         playRound(playerSelection, computerSelection);
//     }

//     if (playerScore > computerScore){
//         return 'You won, great job winning against the computer.';
//     } else if(computerScore > playerScore){
//         return `You lost! don't lose hope you need one win`;
//     } else {
//         return 'You tied with the computer. Hey, better than losing to it.'
//     }   s
// }

// console.log(game());
