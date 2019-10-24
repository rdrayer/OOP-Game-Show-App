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
     new Phrase('Is this thing on'),
     new Phrase('Close but no cigar'),
     new Phrase('Curiosity killed the cat'),
     new Phrase('Kill two birds with one stone'),
     new Phrase('Like shooting fish in a barrel')
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
    if (event.type === 'click') {
      $(button).attr('disabled', 'disabled');
    }  

    if (!this.activePhrase.checkLetter($(button).text()) === true) {
      $(button).addClass('wrong');
      this.removeLife();
    } else {
        $(button).addClass('chosen');
        this.activePhrase.showMatchedLetter($(button).text());
        if (this.checkForWin(false)) {
            this.gameOver(true);
        }
    } 
    //console.log(button);
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const lives = document.querySelectorAll('#scoreboard ol img');
    this.missed ++;

    lives[this.missed - 1].src = 'images/lostHeart.png';
      if (this.missed == 5) {
        this.gameOver();
      }
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    /*
    const letterList = document.querySelectorAll('#phrase ul li');
    let wordCount = 0;

    letterList.forEach(letter => {
      if (letter.className !== 'show') {
        wordCount ++;
      }
    });
    console.log(wordCount);

    if (wordCount === 0) {
      return true;
    } else {
      return false;
    } */
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
      gameOver.innerHTML = "You lose, but it's okay, try again!";
      overlay.style.display = 'block';
      overlay.className = 'lose';
    }
  }

  resetGame() {
    //remove li elements from the Phrase ul element
    $('.hide letter').remove();
    $('.hide space').remove();

    //update onscreen button CSS class to 'key' and enable buttons again
    $('button').removeClass('chosen');
    $('button').removeClass('wrong');
    $('button').addClass('key');
    $('button').removeAttr('disabled');

    //reset heart images
    $('.tries img').attr('src', 'images/liveHeart.png');
  }
} //end
