/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game = null;
 const startButton = document.getElementById('btn__reset');

 startButton.addEventListener('click', () => {
   game = new Game();
   game.startGame();
 });

 const keyButton = document.getElementById('qwerty');

 keyButton.addEventListener('click', () => {
   game.handleInteraction();
 });

//******Steps 1-5 test code:

/*
const logPhrase = (phrase) => {
  console.log(`Phrase - phrase: `, phrase.phrase);
};

const game = new Game();

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
*/

/* //test to verify phrase array was created correctly
game.phrases.forEach((phrase, index) => {
  console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
*/

//******Step 6:
//const game = new Game();
//game.getRandomPhrase().addPhraseToDisplay();

//******Step 7:
/*
const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
*/


//******Step 8:
