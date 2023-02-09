/*set global variables*/
const choices = ["rock", "paper", "scissors"]
const winners = []
let playerScore = 0
let computerScore = 0
const playerSign = document.querySelector('#playerSign');
const computerSign = document.querySelector('#compSign');

const button = document.querySelector('.buttons');
    button.addEventListener('click', () => {
        playGame();
    });

/*play game*/
function playGame(){
    if (isGameDone()){
        openModal();
        return
    }
    playRound()
    if (isGameDone()){
        openModal();
        modalMessage();
    }
}

/*play round*/;
function playRound(round){
    const playerSelection = choice
    const computerSelection = computerChoice();
    const changePic = updateChoicePic(playerSelection, computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);

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

function isGameDone(){
    return playerScore === 5 || computerScore === 5;
}

/*if game over display modal to restart*/
const endModal = document.querySelector('.modal');
const dimBack = document.querySelector('.dimBack');
const restartBtn = document.querySelector('.restartBtn');
const overlay = document.querySelector('#overlay');
const endMessage = document.querySelector('.modalTitle');
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeModal);



function openModal(){
    endModal.classList.add('active');
    dimBack.classList.add('active');
}

function closeModal(){
    endModal.classList.remove('active');
    dimBack.classList.remove('active');
}

function modalMessage(){
    if (playerScore > computerScore){
        endMessage.textContent = 'You Won!'
    }
    else{
        endMessage.textContent = 'You Lost...'
    }
}

/*display the results*/

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

/*restart game*/
function restartGame(){
    playerScore = 0;
    computerScore = 0;
    winLose.textContent = `Make Your Choice`;
    logic.textContent = `First To 5 Wins The Game`;
    playerSign.textContent = `❔`;
    computerSign.textContent = `❔`;
    playerWins.textContent = `Player: 0`;
    compWins.textContent = `Computer: 0`;
    closeModal();
}