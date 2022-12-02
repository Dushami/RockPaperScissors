/*set global variables*/
const choices = ["rock", "paper", "scissors"]
const winners = []
let playerScore = 0
let computerScore = 0

const button = document.querySelector('.buttons');
    button.addEventListener('click', () => {
        playGame();
    });

/*play game*/
function playGame(){
    playRound()
    /*logWinners()*/
}
/*play round*/;
function playRound(round){
    const playerSelection = choice
    const computerSelection = computerChoice();
    const changePic = updateChoicePic(playerSelection, computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

/*get computer choice*/
function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

/*get player choice*/
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
    rockBtn.addEventListener('click', () =>{
        choice = "rock";
    });
    paperBtn.addEventListener('click', () =>{
        choice = "paper";
    });
    scissorsBtn.addEventListener('click', () =>{
        choice = "scissors";
    });

/*compare choices and set winner*/
const winLose = document.querySelector('h2');
const logic = document.querySelector('h3');
const playerWins = document.querySelector('.playerScore');
const compWins = document.querySelector('.cpuScore');

function capitalFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function checkWinner(choicePlayer, choiceComputer){
    if (choicePlayer === choiceComputer){
        winLose.innerHTML = "This round was a tie!";
        logic.innerHTML = `${capitalFirstLetter(choicePlayer)} ties ${choiceComputer}`;
    }
    else if ((choicePlayer == "rock" && choiceComputer == "scissors") ||
             (choicePlayer == "paper" && choiceComputer == "rock") ||
             (choicePlayer == "scissors" && choiceComputer == "paper")){
                playerScore++
                winLose.innerHTML = "You win!";
                logic.innerHTML = `${capitalFirstLetter(choicePlayer)} beats ${choiceComputer}`;
    }
    else {
        computerScore++
        winLose.innerHTML = "You lose...";
        logic.innerHTML = `${capitalFirstLetter(choicePlayer)} loses to ${choiceComputer}`;
    }
    playerWins.innerHTML = `Player: ${playerScore}`;
    compWins.innerHTML = `Computer: ${computerScore}`;
    console.log(playerScore);
    console.log(computerScore);
}

/*display the results*/
const playerSign = document.querySelector('#playerSign');
const computerSign = document.querySelector('#compSign');
function updateChoicePic(player, computer){
   switch(player){
        case 'rock':
            playerSign.innerHTML="✊";
        break;
        case 'paper':
            playerSign.innerHTML="✋";
        break;
        case 'scissors':
            playerSign.innerHTML="✌";
        break;
    }
    switch(computer){
        case 'rock':
            computerSign.innerHTML="✊";
        break;
        case 'paper':
            computerSign.innerHTML="✋";
        break;
        case 'scissors':
            computerSign.innerHTML="✌";
        break;
    }
}

function logRound(playerChoice, computerChoice, winner, round){
    
    console.log("Player chose: ", playerChoice);
    console.log("Computer chose: ", computerChoice);
    console.log(winner);
    console.log("--------------------------");
}