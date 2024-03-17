import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { LetterComponent } from './letter/letter.component';

@NgModule({
  declarations: [BoardComponent, LetterComponent],
  imports: [CommonModule],
  exports: [BoardComponent],
})
export class WordleModule {}
