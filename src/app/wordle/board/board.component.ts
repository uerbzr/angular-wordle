import { Component } from '@angular/core';
import { WordleService } from '../wordle.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  constructor(private readonly wordleService: WordleService) {}

  activeWordleArray = this.wordleService.activeWordleArray;
}
