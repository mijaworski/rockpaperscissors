window.addEventListener("DOMContentLoaded", start);

let playerChoose;
let computerChoose;

function start() {
    console.log();
    setupButtons();
}

//add class paper rock scissors to the player (html2)

function setupButtons() {
    // TO DO: Add eventlisteners on buttons ..
    document.querySelector("#buttons > button.rock").addEventListener("click", playerChoice);
    document.querySelector("#buttons > button.paper").addEventListener("click", playerChoice);
    document.querySelector("#buttons > button.scissors").addEventListener("click", playerChoice);
}

function playerChoice() {
    // TO DO: Store player choice
    console.log("player choice");

    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");

    //A restart of the game.
    document.querySelector("#player1").classList.remove(playerChoose);
    document.querySelector("#player2").classList.remove(computerChoose);

    console.log(this.className);
    playerChoose = this.className;

    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");

    document.querySelector("#player1").addEventListener("animationend", computerChoice);
}

function computerChoice() {
    // TO DO: Make random choice
    console.log("computer choice");
    //FAKE: Always choose "rock";
    //ComputerChoose = "rock";

    const choices = ["rock", "paper", "scissors"];
    const rand = [Math.floor(Math.random() * 3)];
    computerChoose = choices[rand];

    resultOfRound();
}

function resultOfRound() {
    // TO DO: Make decisions
    console.log(`Player choose: ${playerChoose}`);
    console.log(`Computer choose: ${computerChoose}`);

    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player2").classList.remove("shake");

    document.querySelector("#player1").classList.add(playerChoose);
    document.querySelector("#player2").classList.add(computerChoose);

    if (playerChoose == "rock") {
        if (computerChoose == "rock") tie();
        if (computerChoose == "paper") lose();
        if (computerChoose == "scissors") win();
    }
    if (playerChoose == "paper") {
        if (computerChoose == "rock") win();
        if (computerChoose == "paper") tie();
        if (computerChoose == "scissors") lose();
    }
    if (playerChoose == "scissors") {
        if (computerChoose == "rock") lose();
        if (computerChoose == "paper") win();
        if (computerChoose == "scissors") tie();
    }
}

//win();

function tie() {
    document.querySelector("#draw").classList.remove("hidden");
}

function win() {
    document.querySelector("#win").classList.remove("hidden");
}

function lose() {
    document.querySelector("#lose").classList.remove("hidden");
}