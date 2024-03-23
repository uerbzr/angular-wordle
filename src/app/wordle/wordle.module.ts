import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { LetterComponent } from './letter/letter.component';
import { FormComponent } from './form/form.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    BoardComponent,
    LetterComponent,
    FormComponent,
    KeyboardComponent,
    PageComponent,
  ],
  imports: [CommonModule],
  exports: [PageComponent],
})
export class WordleModule {}
