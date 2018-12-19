import { Component, OnInit } from '@angular/core';
import { AnswersState, QuizStateManager } from '../services/quiz-state-manager.service';
import { QuizService } from '../services/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styles: [],
  providers: [
    QuizStateManager
  ]
})
export class QuizPlayerComponent implements OnInit {

  currentQuiz: Quiz;
  currentQuestion: Question;
  currentAnswer: Answer;
  currentAnswers: AnswersState;

  isStarted = false;

  constructor(
    private quizService: QuizService,
    private quizStateManager: QuizStateManager
  ) {}

  ngOnInit() {
    this.quizService.loadQuiz(32).subscribe(quiz => this.initQuiz(quiz));
  }

  private initQuiz(quiz: Quiz) {
    this.currentQuiz = quiz;
    this.quizStateManager.setQuiz(this.currentQuiz);
    this.currentAnswers = this.quizStateManager.getAllAnswers();
  }

  startQuiz() {
    this.isStarted = true;
    this.setNewQuestion(this.quizStateManager.getFirstQA());
  }

  previousQuestion() {
    this.setNewQuestion(this.quizStateManager.getPreviousQA());
  }

  nextQuestion() {
    this.setNewQuestion(this.quizStateManager.getNextQA());
  }

  private setNewQuestion(newQA: any) {
    this.currentQuestion = newQA.question;
    this.currentAnswer = newQA.answer;
  }

  saveAnswer(answer: Answer) {
    this.quizStateManager.saveAnswer(answer);
  }

}
