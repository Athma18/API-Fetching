import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeaturesModule, CoreModule , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TableData';
}
