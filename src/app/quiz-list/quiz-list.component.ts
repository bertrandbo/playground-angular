import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styles: []
})
export class QuizListComponent implements OnInit {

  quizList: Array<Quiz>;

  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
    this.quizList = this.quizService.loadQuizzes();
  }

  onAddClick() {
    this.quizList.push(new Quiz({title: 'Quizz bidon'}));
  }

}
