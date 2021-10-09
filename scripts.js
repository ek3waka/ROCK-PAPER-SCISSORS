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

let computerWins = 0;
let playerWins = 0;
let draws = 0;

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    
    const result = document.createElement('div');
    //lose scenario//
        if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'rock')
    || (playerSelection == 'paper' && computerSelection == 'scissors'))
    {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerWins+=1;
    }
    //win scanario//
    else if ((playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'scissors')
    || (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerWins+=1;
    }
    else if (playerSelection == computerSelection) {
        result.textContent = `Draw: ${playerSelection} is equal ${computerSelection}`;
        draws+=1;
    }
    
    const container = document.querySelector('#results');
    container.appendChild(result);
    incrementClick();
    console.log(playerWins, draws, computerWins);
    return playerWins, draws, computerWins;
}


let counterVal = 5;
function incrementClick() {
    changeText(--counterVal);
}



 function changeText (counterVal) {
     if (counterVal <=0) {
        
        defineWinner (playerWins, draws, computerWins)

     } 
     return  document.getElementById('counter').innerText = `You have ${counterVal} attempts`;
 }

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click',
    () => playRound(button.id))
    });


function defineWinner (playerWins, draws, computerWins) {
    const winner = document.createElement('div');

    if (computerWins > playerWins)
    {
        winner.textContent = "Winner is Computer!"
    }
    else {
        winner.textContent = "Winner is Player!"
    }
    buttons.forEach((button) =>{button.disabled = true}); 
    document.getElementById('counter').innerText = "You have exhausted your attempts";
    const container2 = document.querySelector('#winner');
    container2.appendChild(winner);
}