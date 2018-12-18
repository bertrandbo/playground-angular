import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QUIZZES } from '../data/quizzes';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { AnswersState } from '../services/quiz-state-manager.service';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styles: []
})
export class QuizPlayerComponent implements OnInit {

  private quizzes: Array<Quiz>;
  private currentQuestionIndex: number;
  currentQuiz: Quiz;
  isStarted = false;
  currentQuestion: Question;
  currentAnswer: Answer;
  currentAnswers: AnswersState;

  constructor() {
    // Bouchon temporaire
    this.quizzes = [...QUIZZES];
  }

  ngOnInit() {
    this.currentAnswers = {};
    // On en a besoin que d'un seul pour le moment
    this.currentQuiz = this.quizzes[0];
    this.setNewQuestion(0);
  }

  previousQuestion() {
    this.setNewQuestion(this.currentQuestionIndex - 1);
  }

  nextQuestion() {
    this.setNewQuestion(this.currentQuestionIndex + 1);
  }

  private setNewQuestion(newQuestionIndex: number) {
    this.currentQuestionIndex = newQuestionIndex;
    this.currentQuestion = this.currentQuiz.questions[this.currentQuestionIndex];
    this.currentAnswer = this.getAnswer(this.currentQuestion);
  }

  private getAnswer(question: Question): Answer {
    if (this.currentAnswers.hasOwnProperty(question.id)) {
      return this.currentAnswers[question.id];
    } else {
      return new Answer({
        questionId: question.id,
        multipleChoicesAllowed: false
      });
    }
  }

  saveAnswer(answer: Answer) {
    this.currentAnswers[answer.questionId] = answer;
  }

  startQuiz() {
    this.isStarted = true;
  }

}
