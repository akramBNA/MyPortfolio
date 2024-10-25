import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterOutlet } from "@angular/router";
import dayjs from "dayjs";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AboutComponent,
    ContactComponent
],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  current_year: any = dayjs().format("YYYY");
}
