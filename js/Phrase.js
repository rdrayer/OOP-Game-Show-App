/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   //Display phrase on game board:
   //this method adds letter placeholders to the display when the game starts.
   //create a forEach that goes through every character in the phrase as a list item
   //attach appropirate class to item
   addPhraseToDisplay() {
     const splitPhrase = this.phrase.split('');
     const ul = document.querySelector('#phrase ul');
     ul.append(list);
     let charList = '';

     splitPhrase.forEach(character => {

     });

   }



   checkLetter() {}

   showMatchedLetter() {}


 }
