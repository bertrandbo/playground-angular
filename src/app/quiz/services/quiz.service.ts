import { Injectable, Inject } from '@angular/core';
import { Quiz } from '../../models/quiz';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizSubmission } from 'src/app/models/quiz-submission';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient,
              @Inject('JSON_SERVER_URL') private baseUrl: string,
              @Inject('SETTINGS') private settings: any
  ) { }

  loadQuizzes(): Observable<Array<Quiz>> {
    return this.http.get<Array<Quiz>>(`${this.settings.backendUrl}/quizzes`).map(
      // re-hydrate
      (quizArray: any[]) => quizArray.map(quizData => new Quiz(quizData))
    );
  }

  /**
   * Load the given quiz ALONG WITH its questions.
   */
  loadQuiz(quizId: number): Observable<Quiz> {
    return this.http.get(`${this.baseUrl}/quizzes/${quizId}`)
      .map(quizData => new Quiz(quizData))
      .catch(this.muteRequestError);
  }

  /**
   * Save the given quiz (INSERT or UPDATE).
   */
  saveQuiz(quiz: Quiz): Observable<any> {
    const url = `${this.baseUrl}/quizzes` + (quiz.id ? `/${quiz.id}` : '');
    const method = quiz.id ? 'put' : 'post';
    return this.http.request(method, url, {body: quiz});
  }

  /**
   * Delete the given quiz.
   */
  deleteQuiz(quizId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/quizzes/${quizId}`);
  }

  /**
   * ===============================
   * CRUD operations on SUBMISSIONS.
   * ===============================
   */

  /**
   * Load a quiz submission.
   */
  loadQuizSubmission(submissionId: number): Observable<QuizSubmission> {
    return this.http.get(`${this.baseUrl}/submissions/${submissionId}`)
      // Re-hydrate
      .map((submissionData: any) => new QuizSubmission(submissionData));
  }

  /**
   * Save a quiz submission.
   */
  saveQuizSubmission(submission: QuizSubmission): Observable<any> {
    return this.http.post(`${this.baseUrl}/submissions`, submission);
      // .delay(2000);  // Only to show off the spinner.
  }

  //
  //
  //

  // Catch (and rethrow).
  private muteRequestError(err: any): Observable<any> {
    const errorMsg = `${err.statusText} (${err.status})`;
    return Observable.of(null);
    // return Observable.throw(new Error(errorMsg));
  }
}
