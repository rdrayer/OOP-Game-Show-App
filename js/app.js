/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

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
const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
