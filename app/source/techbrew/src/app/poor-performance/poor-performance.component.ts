import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { LcpComponent } from './lcp/lcp.component';
import { InpComponent } from './inp/inp.component';
import { ClsComponent } from './cls/cls.component';

@Component({
  selector: 'app-poor-performance',
  standalone: true,
  imports: [NgTemplateOutlet, LcpComponent, InpComponent, ClsComponent],
  templateUrl: './poor-performance.component.html',
  styleUrl: './poor-performance.component.css',
})
export class PoorPerformanceComponent {}
