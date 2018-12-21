/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  
  /**
   * Displays the phrase placeholders, broken down to letters, in the DOM.
   */
  addPhraseToDisplay() {
    const ul = document.querySelector('#phrase ul');
    let phraseTemplate = '';
    for(let i = 0; i < this.phrase.length; i++) {
      if(this.phrase[i] == ' ') {
        phraseTemplate += `<li class="space"> </li>`;
      } else {
        phraseTemplate += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`
      }
    }
    ul.innerHTML = phraseTemplate;
  }

  /**
   * Checks whether the letter is included in the phrase.
   * @param {string} letter - The guessed letter.
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Displays all instances of the guessed letter that are found in the string.
   * @param {string} letter - The guessed letter.
   */
  showMatchedLetter(letter) {
    const displayLetters = document.querySelectorAll(`.${letter}`)
    displayLetters.forEach(displayLetter => {
      displayLetter.classList.remove('hide');
      displayLetter.classList.add('show');
    });
  }

}