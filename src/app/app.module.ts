import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './benutzerverwaltung/auth/auth.module';
import { UserOverviewComponent } from './benutzerverwaltung/user-overview/user-overview.component';
import { BodyComponent } from './body/body.component';
import { SharedModule } from './shared/shared.module';
import { ResultsComponent } from './auswertungen/components/results/results.component';
import { QuestionnairesComponent } from './fragebogenverwaltung/components/questionnaires/questionnaires.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    UserOverviewComponent,
    ResultsComponent,
    QuestionnairesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
