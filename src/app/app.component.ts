import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starglobal-challenge';
  squareX = 0;
  squareY = 0;
  speed = 0.5;

  constructor() {}

  onClick(event: MouseEvent): void {
    // the center of the square should coincide with the mouse,
    // 25px is the offset
    this.squareX = event.offsetX - 25;
    this.squareY = event.offsetY - 25;
  }
}
