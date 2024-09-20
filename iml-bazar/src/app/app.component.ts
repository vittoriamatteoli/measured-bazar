import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, ReactiveFormsModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'iml-bazar';
}
