import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordleService {
  constructor() {
    this.activeWordleArray =
      this.wordles[Math.floor(Math.random() * this.wordles.length)].split('');
    console.log(this.activeWordleArray);
  }
  wordles: string[] = [
    'QUICK',
    'KNOCK',
    'PLACE',
    'NIGEL',
    'LIBBY',
    'SPARE',
    'KEITH',
  ];

  wordleLength: number = 5;
  wordleGuessCount: number = 0;
  activeWordleArray: string[] = [];
  guessArray: string[] = [];
  guessArrayHistory: string[][] = [];

  KeyboardClick(n: string) {
    console.log(this.guessArray);
    console.log('length:', this.guessArray.length);
    if (n === 'ENTER' && this.guessArray.length !== this.wordleLength) {
      return;
    }
    if (n === 'ENTER' && this.guessArray.length === this.wordleLength) {
      //console.log('guess:', this.guessArray);
      this.guessArrayHistory[this.wordleGuessCount - 1].push(
        ...this.guessArray
      );
      console.log(this.guessArrayHistory);
      return;
    }
    if (n === 'DELETE') {
      this.guessArray.pop();
    } else {
      if (this.guessArray.length >= 5) {
        return;
      } else {
        this.guessArray.push(n);
      }
    }

    console.log(this.guessArray);
  }

  TakeGuess() {
    console.log('take guess', this.activeWordleArray, this.guessArray);
    //this.AddHistory(this.guessArray);
    this.wordleGuessCount++;
    this.guessArray = [];
  }
}
