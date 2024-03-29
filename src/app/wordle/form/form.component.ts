import { Component, Input } from '@angular/core';
import { WordleService } from '../wordle.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private readonly wordleService: WordleService) {}

  @Input() guessNumber: number = 0; //this.wordleService.wordleGuessCount;
  @Input() guessArray: string[] = this.wordleService.guessArray;
}
