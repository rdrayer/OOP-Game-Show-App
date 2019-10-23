/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

  class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   /**
    * Display phrase on game board
    */
   addPhraseToDisplay() {
    const phraseUl = document.querySelector('#phrase ul');
    let splitPhrase = this.phrase.split('');
    let sentence = '';

    splitPhrase.forEach(character => {
      let checkSpace = /[^\s]/.test(character);
      let phrase = `<li class = "hide letter ${character}">${character}</li>`;
      let space = `<li class = "hide space"> </li>`;
      if (checkSpace) {
        sentence += phrase;
      }
      else {
        sentence += space;
      }
    });
    phraseUl.innerHTML = sentence;
    return phraseUl;
   }

   /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
   checkLetter(letter) {
    const checkLetter = this.phrase.includes(letter);
    return checkLetter;
   }

   /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
   showMatchedLetter(letter) {
   const phraseMatch = document.querySelectorAll('#phrase ul li');

    phraseMatch.forEach(character => {
      let charRefined = character.innerHTML;
      if (charRefined === letter) {
        character.className = 'show';
      }
    });
    }
   
  } //end
