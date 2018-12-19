import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { AnswersState } from '../services/quiz-state-manager.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styles: []
})
export class QuizPlayerComponent implements OnInit {

  private quizzes: Array<Quiz>;
  private currentQuestionIndex: number;
  currentQuiz: Quiz;
  currentQuestion: Question;
  currentAnswer: Answer;
  currentAnswers: AnswersState;

  isStarted = false;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.currentAnswers = {};
    // On en a besoin que d'un seul pour le moment
    this.currentQuiz = this.quizService.loadQuiz(32);
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
