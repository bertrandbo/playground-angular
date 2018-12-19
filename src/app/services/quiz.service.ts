import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QUIZZES } from '../data/quizzes';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  loadQuizzes(): Array<Quiz> {
    return QUIZZES;
  }

  loadQuiz(quizId: number): Quiz {
    return QUIZZES.find(quiz => quiz.id === quizId);
  }
}
