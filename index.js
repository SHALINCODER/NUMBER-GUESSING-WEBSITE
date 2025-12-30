minNum = 1;
maxNum = 100;
randomNum = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;

let running = true;
let guess;

let attempts = 0;

while(running){
    guess = Number(prompt(`Guess a number between ${minNum} and ${maxNum}: `));
    attempts += 1;
    if(guess === randomNum){
        alert(`Congratulations! You guessed the correct number in ${attempts} attempts!`);
        running = false;
        break;
    }
    else if(guess < minNum || guess > maxNum){
        alert(`Please enter a number within the range of ${minNum} to ${maxNum}.`);
    }
    else if(NaN === guess){
        alert("Invalid input. Please enter a number.");
    }
    else if(guess < randomNum){
        alert("Too low! Try again.");
    }
    else if(guess > randomNum){
        alert("Too high! Try again.");
    }
    else{
        alert("Invalid input. Please enter a number.");
    }
}