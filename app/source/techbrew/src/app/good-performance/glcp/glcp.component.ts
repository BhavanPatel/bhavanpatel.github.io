import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Image } from '../../app.constants';

@Component({
  selector: 'app-glcp',
  standalone: true,
  imports: [NgIf],
  templateUrl: './glcp.component.html',
  styleUrl: './glcp.component.css',
})
export class GlcpComponent {
  imageSrc = '';
  isLoading = true;

  ngOnInit() {
    this.imageSrc = Image.low;
    this.isLoading = false;
  }
}
