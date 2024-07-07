import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SickLeaveComponent } from './sick-leave/sick-leave.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SickLeaveComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'i-am-on-sick-leave';
}
