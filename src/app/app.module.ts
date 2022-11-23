// <!-- 
// * File: app.module.ts
// * Author: Baráth Dávid
// * Copyright: 2022, Baráth Dávid
// * Group: Szoft 2 N
// * Date: 2022-11-23
// * Github: https://github.com/david587/
// * Licenc: GNU GPL -->

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
