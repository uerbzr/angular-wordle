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

  wordles: string[] = ['LEWIS', 'CARLO', 'NIGEL', 'LIBBY', 'SPARE', 'KEITH'];
  activeWordleArray: string[] = [];
  guessArray: string[] = [];
  guessArrayHistory: [][] = [];
  KeyboardClick(n: string) {
    if (n === 'delete') {
      this.guessArray.shift();
    } else {
      this.guessArray.push(n);
    }
    console.log(this.guessArray);
  }
  TakeGuess() {
    this.AddHistory(this.guessArray);
    this.guessArray = [];
  }
  AddHistory(item: string[]) {
    //this.guessArrayHistory.push(item);
  }
}
