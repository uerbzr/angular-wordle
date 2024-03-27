import { Component } from '@angular/core';
import { WordleService } from '../wordle.service';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css',
})
export class KeyboardComponent {
  constructor(private readonly wordleService: WordleService) {}

  ready: boolean = this.wordleService.guessArray.length >= 5 ? true : false;
  Guess(n: string) {
    console.log(this.ready);
    //if (n === 'DELETE') this.wordleService.KeyboardClick(n);
    //if (this.wordleService.guessArray.length >= 4) return;
    this.wordleService.KeyboardClick(n);
  }
}
