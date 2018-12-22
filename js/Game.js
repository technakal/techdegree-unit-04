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

  /**
   * Swaps one of the liveHeart icons for the lostHeart icon.
   * Increments the missed counter.
   * Triggers the lose condition if misses is too high.
   */
  removeLife() {
    this.missed++;
    const hearts = document.querySelectorAll('.tries');
    hearts[5 - this.missed].firstElementChild.src = 'images/lostHeart.png';
    if(this.missed >= 5) {
      this.gameOver('lose');
    }
  }

  /**
   * Checks whether all letters in the phrase have been guessed correctly.
   * @returns {boolean} - Boolean for whether all letters are revealed.
   */
  checkForWin() {
    return document.querySelectorAll('.hide').length === 0;
  }

  /**
   * Processes the game over condition.
   * Updates the DOM.
   * Triggers the game reset.
   * @param {string} outcome - String containing either 'win' or 'lose'.
   */
  gameOver(outcome) {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'flex';
    document.querySelector('#btn__reset').textContent = 'Play Again'
    const message = document.querySelector('#game-over-message');

    if(outcome === 'win') {
      message.textContent = `You win! Mama's proud of you!`;
      overlay.className = 'win';
    } else {
      message.textContent = `Mama says nothin' teaches you like losin'. Try again!`;
      overlay.className = 'lose';
    }
    this.resetGame();
  }

  /**
   * Cleans up some game state stuff.
   * Resets keyboard.
   * Refills heart containers.
   */
  resetGame() {
    this.missed = 0;
    this.guessedKeys = '';
    document.querySelectorAll('.key').forEach(key => {
      key.className = 'key';
      key.removeAttribute('disabled');
    });
    document.querySelectorAll('.tries').forEach(heart => {
      heart.firstElementChild.src = 'images/liveHeart.png';
    });
  }
}