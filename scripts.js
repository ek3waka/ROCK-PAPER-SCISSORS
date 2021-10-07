function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }
 
 
function computerPlay() {
    let answerNum = getRandomInt();
    let answer;
    if (answerNum == 0) {
        answer = "rock"; 
    }
    else if (answerNum == 1) {
        answer = "paper";
    }
    else {
        answer = "scissors";
    }   
    return answer;

}

let computerSelection;

function playRound(computerSelection) {
    let playerSelection1 = prompt('Your desicion?');
    let playerSelection = playerSelection1.toLowerCase();
    //lose scenario//
        if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'rock')
    || (playerSelection == 'paper' && computerSelection == 'scissors'))
    {
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
        return computerSelection, playerSelection;
    }
    //win scanario//
    else if ((playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'scissors')
    || (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
        return computerSelection, playerSelection;
    }
    else if (playerSelection == computerSelection) {
        console.log('Draw: ' + playerSelection + ' is equal ' + computerSelection);
        return computerSelection, playerSelection;
    }

}





