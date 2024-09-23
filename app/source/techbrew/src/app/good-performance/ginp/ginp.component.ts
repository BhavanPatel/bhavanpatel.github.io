import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ginp',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ginp.component.html',
  styleUrl: './ginp.component.css',
})
export class GinpComponent {
  isLoading = false;
  result = '';

  handleClick() {
    this.isLoading = true;
    this.result = '';

    setTimeout(() => {
      this.isLoading = false;
      this.result = 'Here is the result!';
      this.heavyComputation();
    }, 1500);
  }

  heavyComputation() {
    const start = performance.now();
    while (performance.now() - start < 2000) {}
  }
}
