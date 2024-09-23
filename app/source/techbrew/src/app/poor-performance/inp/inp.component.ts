import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inp',
  standalone: true,
  imports: [NgIf],
  templateUrl: './inp.component.html',
  styleUrl: './inp.component.css',
})
export class InpComponent {
  isLoading = false;
  result = '';

  handleClick() {
    this.isLoading = true;
    this.result = '';

    this.heavyComputation();

    setTimeout(() => {
      this.isLoading = false;
      this.result = 'Here is the result!';
    }, 1500);
  }

  heavyComputation() {
    const start = performance.now();
    while (performance.now() - start < 2000) {}
  }
}
