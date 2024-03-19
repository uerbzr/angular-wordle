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
}
