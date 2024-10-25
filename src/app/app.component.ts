import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterOutlet, RouterModule } from "@angular/router";
const dayjs = require('dayjs')

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatTooltipModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    AboutComponent,
    ContactComponent,
    RouterModule
],})
export class AppComponent {
  title = 'my-portfolio';
  current_year: any = dayjs().format("YYYY");
}
