import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';
import { Choice } from 'src/app/models/choice';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styles: []
})
export class QuizQuestionComponent implements OnInit, OnChanges {

  @Input() question: Question;
  @Input() answer: Answer;
  @Output() submit = new EventEmitter<Answer>();
  isSubmitted: boolean;

  ngOnInit() {
    this.setIsSubmitted();
  }

  ngOnChanges() {
    this.setIsSubmitted();
  }

  private setIsSubmitted() {
    this.isSubmitted = this.answer.isAnswered();
  }

  get submitLabel() {
    return !this.isSubmitted ? 'Soumettre' : this.answer.isCorrect ? 'CORRECT' : 'INCORRECT';
  }

  get submitClass() {
    return !this.isSubmitted ? 'btn-primary' : this.answer.isCorrect ? 'btn-success' : 'btn-danger';
  }

  submitAnswer(answer: Answer) {
    this.isSubmitted = true; // Flag pour éviter de soumettre une réponse plusieurs fois
    this.submit.emit(answer);
  }

  clickChoice(choice: Choice) {
    if (this.isSubmitted) {
      // Empêche de changer la réponse après avoir soumis
      return;
    }
    // Ajoute/Supprime le choix pour que la sélection se mette à jour visuellement
    if (this.answer.hasChoice(choice)) {
      this.answer.removeChoice(choice);
    } else {
      this.answer.addChoice(choice);
    }
  }
}
