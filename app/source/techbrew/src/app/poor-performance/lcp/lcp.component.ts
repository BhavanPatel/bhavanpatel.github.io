import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Image } from '../../app.constants';

@Component({
  selector: 'app-lcp',
  standalone: true,
  imports: [NgIf],
  templateUrl: './lcp.component.html',
  styleUrl: './lcp.component.css',
})
export class LcpComponent implements OnInit {
  imageSrc = '';

  ngOnInit() {
    this.imageSrc = Image.high;
  }
}
