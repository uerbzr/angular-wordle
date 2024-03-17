import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css',
})
export class LetterComponent {
  @Input() letter: string = '';
  @Input() position: number = 0;
  @Input() status: string = 'none';
}
