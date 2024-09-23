import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cls',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cls.component.html',
  styleUrl: './cls.component.css',
})
export class ClsComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
