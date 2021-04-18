import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { questions } from '../questions';

@Component({
  selector: 'app-question-details-dialog',
  templateUrl: './question-details-dialog.component.html',
  styleUrls: ['./question-details-dialog.component.css']
})
export class QuestionDetailsDialogComponent implements OnInit {
  question;
  questionId;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.questionId = data.questionId;
  }

  ngOnInit(): void {
    this.question = questions.find(question => question.id === this.questionId);
  }

}
