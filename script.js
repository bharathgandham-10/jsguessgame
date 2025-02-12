let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let randomnumber = Math.ceil(Math.random() * 100);


function checkGuess() {
    let guessednumber = parseInt(userInput.value);
    if (guessednumber < randomnumber) {
        gameResult.textContent = "Too Low! Try Again..."
        gameResult.style.backgroundColor = "#333333"
    } else if (guessednumber > randomnumber) {
        gameResult.textContent = "Too High! Try Again..."
        gameResult.style.backgroundColor = "#1e217c"
    } else if (guessednumber === randomnumber) {
        gameResult.textContent = "Congratulations You are selected a Right Number"
        gameResult.style.backgroundColor = "green"
    } else {
        gameResult.textContent = "Enter a Number..."
    }
}