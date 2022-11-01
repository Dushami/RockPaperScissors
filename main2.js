/*set global variables*/
const choices = ["rock", "paper", "scissors"]
const winners = []
const longWinners = []

/*play game*/
function playGame(){
    console.clear();
    for(let i = 1; i < 6; i++){
        playRound(i);
    }
    document.querySelector("button").textContent = "Start new game"
    logWinners()
    longLogWinners()
}
/*play round*/;
function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    longWinners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}
/*get computer choice*/
function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

/*get player choice*/
function playerChoice(){
    let input = prompt("Choose Rock, Paper or Scissors");
    while (input == null){
        input = prompt("Choose Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        input = prompt("Please select valid choice, capitalisation is not important however spelling must be correct");
        while (input == null){
            input = prompt("Please select valid choice, capitalisation is not important however spelling must be correct");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

/*validate player choice*/
function validateInput(choice){
    return choices.includes(choice);
}

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
function logWinners(){
    let playerWins = winners.filter((winner) => winner == "You have won this round").length;
    let computerWins = winners.filter((winner) => winner == "The computer won this round").length;
    let gameTies = winners.filter((winner) => winner == "This round was a tie").length; 
    console.log("Results:");
    console.log("Player won: ", playerWins, " time(s)");
    console.log("Computer won: ", computerWins, " time(s)");
    console.log("The game was tied ", gameTies, " time(s)");
    winners.length = 0;
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log("Round: ", round);
    console.log("Player chose: ", playerChoice);
    console.log("Computer chose: ", computerChoice);
    console.log(winner, " Won this round");
    console.log("--------------------------");
}

function longLogWinners(){
    let longPlayerWins = longWinners.filter((winner) => winner == "You have won this round").length;
    let longComputerWins = longWinners.filter((winner) => winner == "The computer won this round").length;
    let longGameTies = longWinners.filter((winner) => winner == "This round was a tie").length;
    console.log("--------------------------");
    console.log("Long term results:");
    console.log("Player has won: ", longPlayerWins, " times");
    console.log("Computer has won: ", longComputerWins, " times");
    console.log("The game has been tied ", longGameTies, " times");
}