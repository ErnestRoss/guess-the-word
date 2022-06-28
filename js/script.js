/* Guessed letters ul */
const guessedElement = document.querySelector(".guessed-letters");
/* Guess button */
const button = document.querySelector(".guess");
/* Letter input */
const input = document.querySelector(".letter");
/* Word in progress */
const progress = document.querySelector(".word-in-progress");
/* Remaining guesses */
const remElement = document.querySelector(".remaining");
const remSpan = document.querySelector(".remaining span");
/* Message */
const message = document.querySelector(".message");
/* Play again button */
const playAgainBtn = document.querySelector(".play-again");

const word = "magnolia";
const guessed = [];

const obfuscate = function(word) {
    const obfuscateLetters = [];
    for (const letter of word) {
      console.log(letter);
      obfuscateLetters.push("●");
    }
    progress.innerText = obfuscateLetters.join("");
}

obfuscate(word);

button.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = input.value;
    const goodGuess = validateInput(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    input.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a single letter from A-Z."
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessed.includes(guess)) {
        message.innerText = "You already guessed that letter! Try again.";
    } else {
        guessed.push(guess);
        console.log(guessed);
        updateGuessed();
        updateProgress(guessed);
    }
};

const updateGuessed = function() {
    // Clear list
    guessedElement.innerHTML = "";
    // Create list item
    for (const letter of guessed) {
        const li = document.createElement("li");
        // Fill list item
        li.innerText = letter;
        // Inster list item into list
        guessedElement.append(li);
    }
};

const updateProgress = function(guessed) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessed.includes(letter)) {
        revealWord.push(letter.toUpperCase());
    } else {
        revealWord.push("●");
    }
}
progress.innerText = revealWord.join("");
checkIfWin();
};

const checkIfWin = function () {
    if (word.toUpperCase() === progress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};

