/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.querySelector('#btn__reset').addEventListener('click', function() {
  game.startGame(game);
});

document.querySelector('#qwerty').addEventListener('click', function() {
  if(event.target.tagName === 'BUTTON') {
    game.handleInteraction(event.target.textContent);
  }
});

document.addEventListener('keyup', function() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if(alphabet.includes(event.key.toLowerCase()) && !game.guessedKeys.includes(event.key.toLowerCase())) {
    game.handleInteraction(event.key);
  }
})