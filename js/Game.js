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
     new Phrase('test'),
     new Phrase('one'),
     //new Phrase('A friend in need is a friend indeed'),
     //new Phrase('Close but no cigar'),
     //new Phrase('Curiosity killed the cat'),
     //new Phrase('Kill two birds with one stone'),
     //new Phrase('Like shooting fish in a barrel')
   ];
   return fivePhrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
    return randomPhrase;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to the user
   */
  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    const keyButton = document.getElementById('qwerty');

    if (event.type === 'click') {
       keyButton.className = 'wrong';
    } else {
        $(button).addClass('wrong');
        this.removeLife();
    }
    if (this.checkForWin()=== true) {
        this.gameOver(true);
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed += 1;
    const hearts = document.querySelectorAll('ol img');

    hearts[this.missed - 1].src = 'images/lostHeart.png';
        if (this.missed === 5) {

            this.gameOver();
        }
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const letterList = document.querySelectorAll('#phrase ul li');
    //no words selected yet
    let wordCount = 0;

     for (let i = 0; i < letterList.length; i++) {
      if (letterList[i].className !== 'show') {
        wordCount ++;
      }
       if (wordCount === 0) {
        return true;
      }
       else {
        return false;
      }
    }
  }


  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(win) {
    const overlay = document.getElementById('overlay');
    const gameOver = document.getElementById('game-over-message');

    if (win) {
      gameOver.innerHTML = 'You won!';
      overlay.style.display = 'block';
      overlay.className = 'win';
    } else {
      gameOver.innerHTML = 'You lost!';
      overlay.style.display = 'block';
      overlay.className = 'lose';
    }
  }





}
