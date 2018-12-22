/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.querySelector('#banner').style.display = 'none';
document.querySelector('#scoreboard').style.display = 'none';
document.querySelector('#qwerty').style.display = 'none';
document.querySelector('#phrase').style.display = 'none';
/**
 * Sets up the physical keyboard event listeners.
 * If on the start screen and enter is pressed, starts the game.
 * If not on the start screen and any alpha key is pressed, handles the interaction.
 * More convenient for the keyboard user.
 */
document.addEventListener('keyup', function() {
  const onStartScreen = document.querySelector('#overlay').style.display === 'none' ? false : true;
  if(onStartScreen && event.key.toLowerCase() ==='enter') {
    game.startGame(game);
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if(!onStartScreen && alphabet.includes(event.key.toLowerCase()) && !game.guessedKeys.includes(event.key.toLowerCase())) {
    game.handleInteraction(event.key);
  }
});

/**
 * Sets the event listener on the start screen.
 * Starts the game if the start button is pressed.
 */
document.querySelector('#btn__reset').addEventListener('click', function() {
  game.startGame(game);
});

/**
 * Sets the event listener on the on-screen keyboard.
 * Triggers the handleInteraction function if the user presses one of the button elements.
 */
document.querySelector('#qwerty').addEventListener('click', function() {
  if(event.target.tagName === 'BUTTON') {
    game.handleInteraction(event.target.textContent);
  }
});

/**
 * Sets the event listener on the on-screen keyboard for mobile events.
 * Triggers the handleInteraction function if the user presses one of the button elements.
 */
document.querySelector('#qwerty').addEventListener('touchstart', function() {
  if(event.target.tagName === 'BUTTON') {
    game.handleInteraction(event.target.textContent);
  }
});
