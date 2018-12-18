import { Component, OnInit } from '@angular/core';

import {Question} from '../models/question';
import {Answer} from '../models/answer';
import { Choice } from '../models/choice';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styles: []
})
export class QuizQuestionComponent implements OnInit {
  // Question en cours
  question = new Question({
    id: 12,
    title: 'En quelle année AngularJS (première version) est-il sorti ?',
    choices: [
      { text: '2008'},
      { text: '2009', isCorrect: true },
      { text: '2012'},
      { text: '2014'}
    ],
    explanation: 'La version de 2009 est celle développé initialement par Miško Hevery, qui ne travaillait pas encore chez Google.'
  });
  // Réponse en cours (réponse "vierge" pour l'instant)
  answer = new Answer({
    questionId: 12,
    multipleChoicesAllowed: false
  });

  isSubmitted: boolean;

  constructor() { }

  ngOnInit() {
    this.isSubmitted = this.answer.isAnswered();
  }

  get submitLabel() {
    return !this.isSubmitted ? 'Soumettre' : this.answer.isCorrect ? 'CORRECT' : 'INCORRECT';
  }

  get submitClass() {
    return !this.isSubmitted ? 'btn-primary' : this.answer.isCorrect ? 'btn-success' : 'btn-danger';
  }

  // Charge une nouvelle question et une nouvelle réponse.
  gotoNextQuestionTEMP() {
    this.question = new Question({
      'id': 35,
      'title': 'Angular est vraiment trop canon.',
      'choices': [
        { 'text': 'Vrai', 'isCorrect': true },
        { 'text': 'Faux'}
      ],
      'explanation': 'À ce stade, comment ne pas en être persuadé ? 😝'
    });
    this.answer = new Answer({
      questionId: 35,
      multipleChoicesAllowed: false
    });
    this.isSubmitted = false;
  }

  submitAnswer(answer: Answer) {
    this.isSubmitted = true; // Flag pour éviter de soumettre une réponse plusieurs fois
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
