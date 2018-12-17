import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QUIZZES } from '../data/quizzes';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styles: []
})
export class QuizListComponent implements OnInit {

  quizzes: Array<Quiz>;

  constructor() {
    this.quizzes = QUIZZES;
  }

  ngOnInit() {
  }

}
