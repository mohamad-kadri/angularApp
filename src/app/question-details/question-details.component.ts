import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { questions } from '../questions';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  question;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const questionId = Number(routeParams.get('questionId'));
    this.question = questions.find(question => question.id === questionId);
  }

}
