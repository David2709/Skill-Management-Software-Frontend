import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './benutzerverwaltung/auth/auth.module';
import { DialogCompanyForm, UserOverviewComponent } from './benutzerverwaltung/user-overview/user-overview.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from './shared/shared.module';
import { ResultsComponent } from './auswertungen/components/results/results.component';
import { QuestionnairesComponent } from './fragebogenverwaltung/components/questionnaires/questionnaires.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    UserOverviewComponent,
    DialogCompanyForm,
    ResultsComponent,
    QuestionnairesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
