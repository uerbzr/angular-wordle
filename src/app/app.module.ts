import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { WordleModule } from './wordle/wordle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WordleModule],
  providers: [],
  bootstrap: [AppComponent, CommonModule],
})
export class AppModule {}
