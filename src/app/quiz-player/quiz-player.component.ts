import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { AnswersState, QuizStateManager } from '../services/quiz-state-manager.service';
import { QuizService } from '../services/quiz.service';

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
    this.currentQuiz = this.quizService.loadQuiz(32);
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
