/*set global variables*/
const choices = ["rock", "paper", "scissors"]
const winners = []

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
function checkWinner(choicePlayer, choiceComputer){
    if (choicePlayer === choiceComputer){
        return "This round was a tie";
    }
    else if ((choicePlayer == "rock" && choiceComputer == "scissors") ||
             (choicePlayer == "paper" && choiceComputer == "rock") ||
             (choicePlayer == "scissors" && choiceComputer == "paper")){
        return "You have won this round";
    }
    else {
        return "The computer won this round";
    }
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