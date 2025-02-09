const prompt = require('prompt'); // Importing prompt package

// Start prompt
prompt.start();

// Ask user for input
prompt.get(['userSelection'], function (err, result) {
    if (err) {
        console.error("Error in input");
        return;
    }

    let userSelection = result.userSelection.toUpperCase(); // Convert input to uppercase
    const validChoices = ["ROCK", "PAPER", "SCISSORS"];

    // Validate input
    if (!validChoices.includes(userSelection)) {
        console.log("Invalid choice! Please choose ROCK, PAPER, or SCISSORS.");
        return;
    }

    // Generate computer's choice
    const randomNum = Math.random();
    let computerSelection;

    if (randomNum < 0.34) {
        computerSelection = "PAPER";
    } else if (randomNum < 0.68) {
        computerSelection = "SCISSORS";
    } else {
        computerSelection = "ROCK";
    }

    // Display choices
    console.log(`\nYou chose: ${userSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    // Determine winner
    if (userSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (userSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (userSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        console.log("User Wins! 🎉");
    } else {
        console.log("Computer Wins! 🤖");
    }
});
