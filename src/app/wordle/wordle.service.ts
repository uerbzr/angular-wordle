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

  //ready: boolean = false;
  wordles: string[] = ['LEWIS', 'CARLO', 'NIGEL', 'LIBBY', 'SPARE', 'KEITH'];
  activeWordleArray: string[] = [];
  guessArray: string[] = [];
  guessArrayHistory: [][] = [];
  KeyboardClick(n: string) {
    console.log(this.guessArray);
    console.log('length:', this.guessArray.length);
    if (n === 'DELETE') {
      this.guessArray.shift();
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
    this.AddHistory(this.guessArray);
    this.guessArray = [];
  }
  AddHistory(item: string[]) {
    //this.guessArrayHistory.push(item);
  }
}
