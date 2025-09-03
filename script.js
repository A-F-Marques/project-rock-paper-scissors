    
    let userScore = 0
    // create variable userScore with value "0"

    let computerScore = 0;
    // create variable computerScore with value "0"

    let userInput = 0;

    let computerInput = 0;
    // create variable computerInput with value "0"
    

    function getComputerInput() {

        computerInput = Math.random();
        if (computerInput <= 0.3333)
            computerInput = "rock";
        else if (computerInput <= 0.6666)
            computerInput = "paper";
        else 
            computerInput = "scissors";

        return computerInput
    }
    // create function named getComputerInput in which {
    //     using math.random choose a random number (0 to 1) and store in variable "X";
    //     IF(x <= 0.3333) => computerInput = Rock;
    //     ELSEIF(x <= 0.6666) => computerInput = Paper;
    //     ELSE() => computerInput = Scissors;}


    console.log(getComputerInput())
    // console.log(getcomputerInput())

    function getUserInput() {

        userInput = prompt("rock, paper or scissors?");
        userInput = userInput.toLowerCase();
        return userInput
    }
     // create function named getUserInput in which {
        // userInput = prompt(rock, paper, scissors)
        // convert userInput to lowercase
        // return userInput
function playGame() {
    for (let i = 0; i < 5 ; i++) {
        getComputerInput();
        getUserInput();
        function playRound(userInput, computerInput) {
            if (userInput === computerInput) {
                return "tie"
            }
            else if ((userInput === "rock" && computerInput === "scissors") ||
                (userInput === "paper" && computerInput === "rock") ||
                (userInput === "scissors" && computerInput === "paper"))
                {return "user"}
            else {
                return "computer"
            }


    }
}
}
  //Create function named playRound with userInput and computerInput

  
    // make function getComputerInput run;
    
    // make function getUserInput run;

    
       // create function named playGame in which {
        // repeat 5 times {
            // get user input by running getUserInput
            // get computer input by running getComputerInput
            // play one round by running playRound with userInput and computerInput
            // if user wins the round, increment userScore by 1
            // else if computer wins the round, increment computerScore by 1
            // else (tie), do not change scores
        //}
        // after 5 rounds, display userScore and computerScore
        // declare winner based on who has higher score
    //}

/*function playGame() {
    for (let i = 0; i < 5; i++) {
        const userInput = getUserInput();
        const computerInput = getComputerInput();
        const result = playRound(userInput, computerInput);

        if (result === "user") {
            userScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        // else tie, do nothing
    }

    console.log(`Final Scores:\nUser: ${userScore}\nComputer: ${computerScore}`);
    if (userScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > userScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}

function playRound(userInput, computerInput) {
    if (userInput === computerInput) {
        return "tie";
    }
    if (
        (userInput === "rock" && computerInput === "scissors") ||
        (userInput === "paper" && computerInput === "rock") ||
        (userInput === "scissors" && computerInput === "paper")
    ) {
        return "user";
    }
    return "computer";
}*/