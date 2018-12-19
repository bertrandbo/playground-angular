import { Injectable, Inject } from '@angular/core';
import { Quiz } from '../../models/quiz';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient,
              @Inject('JSON_SERVER_URL') private url: string,
              @Inject('SETTINGS') private settings: any
  ) { }

  loadQuizzes(): Observable<Array<Quiz>> {
    return this.http.get<Array<Quiz>>(`${this.settings.backendUrl}/quizzes`);
  }

  loadQuiz(quizId: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.url}/quizzes/${quizId}`);
  }

  deleteQuiz(quizId: number): Observable<any> {
    return this.http.delete(`${this.url}/quizzes/${quizId}`);
  }
}
