import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GraphsComponent } from './graphs/graphs.component';
import { CitiesComponent } from './cities/cities.component';
import { CandidatesComponent } from './candidates/candidates.component';


const routes: Routes = [
  {path: 'candidates', component: CandidatesComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'graphs', component: GraphsComponent},
  {path: 'home', redirectTo: ''},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
