import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { GlcpComponent } from './glcp/glcp.component';
import { GclsComponent } from './gcls/gcls.component';
import { GinpComponent } from './ginp/ginp.component';

@Component({
  selector: 'app-good-performance',
  standalone: true,
  imports: [NgTemplateOutlet, GlcpComponent, GclsComponent, GinpComponent],
  templateUrl: './good-performance.component.html',
  styleUrl: './good-performance.component.css',
})
export class GoodPerformanceComponent {}
