/* Guessed letters ul */
const guessed = document.querySelector(".guessed-letters");
/* Guess button */
const button = document.querySelector(".guess");
/* Letter input */
const input = document.querySelector(".letter");
/* Word in progress */
const progress = document.querySelector(".word-in-progress");
/* Remaining guesses */
const remaining = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
/* Message */
const message = document.querySelector(".message");
/* Play again button */
const playAgain = document.querySelector(".play-again");

const word = "Magnolia";

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
    const guess = input.value;
    console.log(input.value);
    input.value = "";
});

