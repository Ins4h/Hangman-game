import Hangman from "./hangman";
import getPuzzle from "./request";

const puzzle = document.querySelector(".puzzle");
const remainingGuesses = document.querySelector(".guesses");

let game;

window.addEventListener("keypress", (e) => {
  game.makeGuesses(e.key);
  game.checkStatus();
  render();
});

const render = () => {
  puzzle.innerHTML = "";
  remainingGuesses.textContent = game.statusMessage;
  game.getPuzzle.split("").forEach((letter) => {
    const span = document.createElement("span");
    puzzle.appendChild(span);
    span.textContent = letter;
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game = new Hangman(puzzle, 5);
  render();
};

document.querySelector(".reset").addEventListener("click", startGame);
startGame();
