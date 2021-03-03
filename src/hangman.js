"use strict";
class Hangman {
  constructor(word, missedGuesses) {
    this.word = word;
    this.wordLetters = word.toLowerCase().split("");
    this.missedGuesses = missedGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }

  get getPuzzle() {
    let puzzle = "";
    this.wordLetters.forEach((letter) => {
      this.guessedLetters.includes(letter) || letter === " "
        ? (puzzle += letter)
        : (puzzle += "*");
    });
    return puzzle;
  }

  makeGuesses(guess) {
    if (typeof guess !== "string")
      throw new Error("Argument should be a string");
    guess.toLowerCase();
    if (this.status === "playing") {
      if (this.guessedLetters.includes(guess))
        return console.log("Your guess already exist");
      else if (this.wordLetters.includes(guess))
        this.guessedLetters = [...this.guessedLetters, guess];
      else this.missedGuesses--;
    }
  }

  checkStatus() {
    const finished = this.wordLetters.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " "
    );
    if (this.missedGuesses === 0) this.status = "failed";
    else if (finished) this.status = "finished";
    else this.status = "playing";
  }

  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.missedGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word}"`;
    } else if (this.status === "finished") {
      return "Great work! You guessed the word";
    }
  }
}

export default Hangman;
