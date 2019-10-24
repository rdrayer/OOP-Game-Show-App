/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null;
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
  game = new Game();
  game.startGame();
  game.resetGame();
});

let keyButton = document.querySelectorAll('#qwerty div button');
keyButton.forEach(button => {
  button.addEventListener('click', () => {
    game.handleInteraction(button);
  })
});
