const playerHand = ['ROCK', 'PAPER', 'SCISSORS'];
const input = prompt("Rock Paper Scissors, choose your fighter!!");


const computerPlay = () => {
    const computerChoice = playerHand[Math.floor(Math.random() * 3)]
    return computerChoice
};

const userPlay = () => {
    const userInput = input.toUpperCase();
    return userInput;
};

const playGame = (computerPlay, userPlay) => {
    if (computerPlay == 'ROCK' && userPlay == 'PAPER') {
        return "You won! Paper beats Rock!"
    } else if (computerPlay == 'PAPER' && userPlay == 'SCISSORS') {
        return 'You won! Scissors beat Paper!'
    } else if (computerPlay == 'SCISSORS' && userPlay == 'ROCK') {
        return 'You won! Rock beats Scissors!'
    } else if (computerPlay == userPlay)
    { return 'There seems to be a tie!'
    } else {
        return 'You lost! Try again later...'
    }
};
 
for (let index = 0; index < 5; index++) {
    console.log(playGame());
    
}

