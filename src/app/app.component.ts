// <!-- 
// * File: app.component.ts
// * Author: Baráth Dávid
// * Copyright: 2022, Baráth Dávid
// * Group: Szoft 2 N
// * Date: 2022-11-23
// * Github: https://github.com/david587/
// * Licenc: GNU GPL -->

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cim = 'Időmunka';
  nev ="Baráth Dávid";
  osztaly="Szoft 2 N"
  datum="2022.11.23";

  hossz !: number;
  elotolas !: number;
  fordulatszam !: number;
  ido!: number;
  show: boolean = false;

  calcArea():void{
    this.ido = this.hossz / this.elotolas * this.fordulatszam;
    this.timeShow()
  }

  timeShow() :void {
    this.show = true;
  }
}
