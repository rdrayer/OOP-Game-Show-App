/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  //Method to hold five phrases to add to phrases property:
  createPhrases() {
   const fivePhrases = [
     new Phrase('A friend in need is a friend indeed'),
     new Phrase('Close but no cigar'),
     new Phrase('Curiosity killed the cat'),
     new Phrase('Kill two birds with one stone'),
     new Phrase('Like shooting fish in a barrel')
   ];
   return fivePhrases;
  }

  startGame() {}

  //Obtain random phrase from this.phrases property:
  getRandomPhrase() {
    const randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
    return randomPhrase;
  }

  handleInteraction() {}

  removeLife() {}

  checkForWin() {}

  gameOver() {}

}
