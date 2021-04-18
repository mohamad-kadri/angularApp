import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { QuestionsComponent } from './questions/questions.component';
import { RouterModule } from '@angular/router';
import { QuestionDetailsComponent } from './question-details/question-details.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionDetailsDialogComponent } from './question-details-dialog/question-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    QuestionsComponent,
    QuestionDetailsComponent,
    QuestionDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: 'questions/:questionId', component: QuestionDetailsComponent },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
