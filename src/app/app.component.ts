import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { TableComponent } from "./features/table/table.component";

@Component({
  selector: 'app-root',
  imports: [FeaturesModule, CoreModule , TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TableData';
}
