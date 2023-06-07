import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyCardComponent } from './currency-card/currency-card.component';
import { MatCardModule } from '@angular/material/card'
import {CommonModule, DatePipe} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    CurrencyCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
