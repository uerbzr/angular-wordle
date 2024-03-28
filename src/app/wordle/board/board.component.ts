import { Component } from '@angular/core';
import { WordleService } from '../wordle.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  constructor(private readonly wordleService: WordleService) {}

  wordleAnswer = this.wordleService.activeWordleArray;
  activeWordleArray = []; //this.wordleService.activeWordleArray;

  Guess(n: string) {
    console.log(n);
    this.wordleService.KeyboardClick(n);
  }
}
