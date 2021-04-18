import { Component, OnInit } from '@angular/core';
import { questions } from '../questions';
import { MatDialog } from '@angular/material/dialog';
import { QuestionDetailsDialogComponent } from '../question-details-dialog/question-details-dialog.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questionsList:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.questionsList = questions;
  }

  openDialog(id:number) {
    this.dialog.open(QuestionDetailsDialogComponent,{
      data:{
        questionId:id
      }
    });
  }

}
