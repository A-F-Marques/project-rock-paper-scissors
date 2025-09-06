    
    let userScore = 0
    // create variable userScore with value of 0

    let computerScore = 0;
    // create variable computerScore with value of 0

    let userInput = 0;
    // create variable cuserInput with value of 0

    let computerInput = 0;
    // create variable computerInput with value of 0
    const body = document.querySelector("body");
    const result = document.createElement("div");
    

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener(("click"), (event) => {
        return userInput = "rock", playGame();
    })
    
    const paperBtn = document.querySelector("#paper")
    paperBtn.addEventListener(("click"), () => {
        return userInput = "paper", playGame();
    })

    const scissorsBtn = document.querySelector("#scissors")
    scissorsBtn.addEventListener(("click"), () => {
        return userInput = "scissors", playGame();
    })

   

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


               /* function getUserInput() {

                    userInput = prompt("rock, paper or scissors?");
                    userInput = userInput.toLowerCase();
                    return userInput
                }*/
     // create function named getUserInput in which {
        // userInput = prompt(rock, paper, scissors)
        // convert userInput to lowercase
        // return userInput

function playGame() {

        getComputerInput();
        console.log(computerInput);
        console.log(userInput);

        function playRound(userInput, computerInput) {
            if (userInput === computerInput) {
                return "tie";
            }
            else if ((userInput === "rock" && computerInput === "scissors") ||
                (userInput === "paper" && computerInput === "rock") ||
                (userInput === "scissors" && computerInput === "paper")) {  
                 return "user";
                }
            else {
                return "computer";
            }
    } 
     const result = playRound(userInput, computerInput)
        if (result === "user") {
            userScore = (userScore + 1);
            return userScore, updateScore();
        }
        if ( result === "computer") {
            computerScore = (computerScore + 1);
            return computerScore, updateScore();
        } 
        else updateScore()

}
function updateScore() {
    result.textContent = "The user Has " + userScore + " points.  The computer has " + computerScore + " points"
    result.setAttribute("style", "color: black; background: lightGray; height: 100px;");
    result.style.textAlign = "center"
    result.style.verticalAlign = "auto"
   
    return body.appendChild(result);
}


                       /* function winner() {
                            if (computerScore > userScore) {
                                return "The computer won this game!!";
                            }
                            else if (userScore > computerScore) {
                                return "You won this game!!";
                            }
                            else {
                                return "It was a Tie!!"
                            }
                        }
                        // Function for revealing the winner based on userScore and computerScore

                        console.log("The user score is: " + userScore + " and the computer score is: " + computerScore + " therefore...")
                        console.log(winner())
                        // Write in console the score of each and the result of it through the Winner() function*/