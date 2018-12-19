import { Injectable } from '@angular/core';
import { Quiz } from '../../models/quiz';
import { QUIZZES } from '../../data/quizzes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  loadQuizzes(): Observable<Array<Quiz>> {
    return this.http.get<Array<Quiz>>('http://localhost:3004/quizzes');
  }

  loadQuiz(quizId: number): Observable<Quiz> {
    return this.http.get<Quiz>(`http://localhost:3004/quizzes/${quizId}`);
  }

  deleteQuiz(quizId: number): Observable<any> {
    return this.http.delete(`http://localhost:3004/quizzes/${quizId}`);
  }
}
