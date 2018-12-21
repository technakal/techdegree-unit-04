/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0; 
    this.phrases = [
      new Phrase('Quick and Dirty'),
      new Phrase('On the Ropes'),
      new Phrase('Mountain Out of a Molehill'),
      new Phrase('Ugly Duckling'),
      new Phrase('Quality Time'),
      new Phrase('Elephant in the Room'),
      new Phrase('Give a Man a Fish'),
      new Phrase('Long In The Tooth'),
      new Phrase('zephyr friends'),
      new Phrase('coal weather')
    ];
    this.activePhrase = null;
    this.guessedKeys = ''
  } 

  /**
   * Initiates the game.
   * Selects a random phrase and displays the placeholders in the DOM.
   */
  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Randomly selects a phrase from the phrases array.
   * @returns {string} - Returns the random phrase.
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  /**
   * Handles the input of the player.
   * Checks whether the input key is found in the activePhrase.
   * Updates the DOM, either to display the correctly guessed letter or to remove a life.
   * Checks for win conditions.
   * @param {event} event - The triggering event. Could be a UI click or a keyboard press.
   */
  handleInteraction(guessedLetter) {
    this.guessedKeys += guessedLetter;
    let keys = document.querySelectorAll('.key');
    let keyButton;
    keys.forEach(key => {
      if(key.textContent == guessedLetter) {
        keyButton = key;
      }
    });
    keyButton.setAttribute('disabled', true);
    const inPhrase = this.activePhrase.checkLetter(guessedLetter);
    if(inPhrase) {
      keyButton.classList.add('chosen');
      this.activePhrase.showMatchedLetter(guessedLetter);
      if(this.checkForWin()) {
        this.gameOver('win');
      }
    } else {
      keyButton.classList.add('wrong');
      this.removeLife();
    }
  }

  removeLife() {
    this.missed++;
    if(this.missed >= 5) {
      this.gameOver('lose');
    }
    // replaces one of the liveHeart.png images with a lostHeart.png image
  }

  checkForWin() {
    document.querySelectorAll('.hide');
    // checks if the player has revealed all letters in the Phrase
  }

  gameOver(outcome) {
    console.log(outcome);
    // displays the start screen overlay
    // if outcome == win
      // displays Win_Message
      // sets overlay class to win
    // else
      // displays Loss_Message
      // sets overlay class to lose
  }
}