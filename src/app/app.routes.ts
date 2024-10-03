import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { GuidesComponent } from './guides/guides.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'guides', component: GuidesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }