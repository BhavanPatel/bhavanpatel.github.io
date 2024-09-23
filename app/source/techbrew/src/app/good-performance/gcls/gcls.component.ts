import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gcls',
  standalone: true,
  imports: [NgIf],
  templateUrl: './gcls.component.html',
  styleUrl: './gcls.component.css',
})
export class GclsComponent {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
