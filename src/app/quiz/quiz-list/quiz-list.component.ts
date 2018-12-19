import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Quiz } from 'src/app/models/quiz';

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
    this.quizService.loadQuizzes().subscribe(quizzes => this.quizList = quizzes);
  }

  onAddClick() {
    this.quizList.push(new Quiz({title: 'Quizz bidon'}));
  }

}
