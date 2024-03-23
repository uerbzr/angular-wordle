import { Component } from '@angular/core';
import { WordleService } from '../wordle.service';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css',
})
export class KeyboardComponent {
  constructor(private readonly wordleService: WordleService) {}

  Guess(n: string) {
    this.wordleService.KeyboardClick(n);
  }
}
