// START + DIFFICULTY SELECTION
const startWrapper = document.getElementById(`startWrapper`);
const difficultySelectForm = document.getElementById(`difficultySelect`);
const difficultySelect = document.getElementById(`difficulty`);

// GAME
const gameWrapper = document.getElementById(`gameWrapper`);
const guessesText = document.getElementById(`guesses`);
const wordHolderText = document.getElementById(`wordHolder`);

// GUESSING FORM
const guessForm = document.getElementById(`guessForm`);
const guessInput = document.getElementById(`guessInput`);

// GAME RESET BUTTON
const resetGame = document.getElementById(`resetGame`);

// CANVAS
let canvas = document.getElementById(`hangmanCanvas`);

// The following Try-Catch Block will catch the errors thrown
try {
  // Instantiate a game Object using the Hangman class.
  const game = new Hangman(canvas);
  // add a submit Event Listener for the to the difficultySelectionForm
  //    get the difficulty input
  //    call the game start() method, the callback function should do the following
  //       1. hide the startWrapper
  //       2. show the gameWrapper
  //       3. call the game getWordHolderText and set it to the wordHolderText
  //       4. call the game getGuessessText and set it to the guessesText
  difficultySelectForm.addEventListener(`submit`, function (event) {
    let difficultyStr = difficultySelect.option[difficultySelect.selectedIndex].value;
    game.start(difficultyStr, function next(){
      startWrapper.classList.add(`hidden`);
      gameWrapper.classList.remove(`hidden`);
      wordHolderText.innerHTML = game.getWordHolderText();
      guessesText.innerHTML = game.getGuessesText();
    });
  });

  // add a submit Event Listener to the guessForm
  guessForm.addEventListener(`submit`, function (e) {
    //    get the guess input
    const guessVar = guessInput.value;
    //    call the game guess() method
    game.guess(guessTxt);
    //    set the wordHolderText to the game.getHolderText
    wordHolderText.innerHTML = game.getWordHolderText();
    //    set the guessesText to the game.getGuessesText
    guessesText.innerHTML = game.getGuessesText();
    //    clear the guess input field
    guessInput.value = ``;

    // Given the Guess Function calls either the checkWin or the onWrongGuess methods
    // the value of the isOver and didWin would change after calling the guess() function.
    // Check if the game isOver:
    //      1. disable the guessInput
    //      2. disable the guessButton
    //      3. show the resetGame button  
    if(game.isOver){
      guessInput.disabled = true;
      guessButton.disabled = true;
      resetGame.classList.remove(`hidden`);
      // if the game is won or lost, show an alert.
      if(game.didWin){
        alert(`You won. Congrats`);
      }
      else {
        alert(`You lost. Good Try`);
      }
    }
  });

  // add a click Event Listener to the resetGame button
  //    show the startWrapper
  //    hide the gameWrapper
  resetGame.addEventListener(`click`, function (e) {});
} catch (error) {
  console.error(error);
  alert(error);
}
