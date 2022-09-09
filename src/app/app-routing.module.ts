import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './auswertungen/components/results/results.component';
import { UserOverviewComponent } from './benutzerverwaltung/user-overview/user-overview.component';
import { QuestionnairesComponent } from './fragebogenverwaltung/components/questionnaires/questionnaires.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'user-overview', component: UserOverviewComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'questionnaires', component: QuestionnairesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
