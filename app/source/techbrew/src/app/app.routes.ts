import { RouterModule, Routes } from '@angular/router';
import { PoorPerformanceComponent } from './poor-performance/poor-performance.component';
import { GoodPerformanceComponent } from './good-performance/good-performance.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'poor',
    component: PoorPerformanceComponent,
  },
  {
    path: 'good',
    component: GoodPerformanceComponent,
  },
  { path: '', redirectTo: 'poor', pathMatch: 'full' },
];

// export const routes: Routes = [
//   { path: '', component: GoodPerformanceComponent, pathMatch: 'full' },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
