import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationBackgroundComponent } from "./education-background/education-background.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, // Default route
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "education-background", component: EducationBackgroundComponent },
];
