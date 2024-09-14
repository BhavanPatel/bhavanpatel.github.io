import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'techbrew';
  lcpImage = '';

  constructor() {
    this.initLCPAlert();
  }

  initLCPAlert() {
    setInterval(() => {
      if (this.lcpImage.length) {
        this.lcpImage = '';
      } else {
        this.lcpImage =
          'https://fastly.picsum.photos/id/397/1080/1080.jpg?hmac=32tbA6A7Zmn196TksDP73zB4L4RWB2aIi2JyFUsYfpg';
      }
    }, 1000);
    // setTimeout(() => {
    //   this.lcpImage =
    //     'https://fastly.picsum.photos/id/397/1080/1080.jpg?hmac=32tbA6A7Zmn196TksDP73zB4L4RWB2aIi2JyFUsYfpg';
    // }, 10000);
  }
}
