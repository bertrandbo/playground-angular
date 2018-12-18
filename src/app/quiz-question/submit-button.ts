import { Answer } from '../models/answer';

export class SubmitButton {
  label = 'Soumettre';
  state = 'btn-primary';
  submitted = false;

  submitAnswer(answer: Answer) {
    this.submitted = true; // Flag pour éviter de soumettre une réponse plusieurs fois
    if (answer.isCorrect) {
      this.state = 'btn-success';
      this.label = 'CORRECT';
    } else {
      this.state = 'btn-danger';
      this.label = 'INCORRECT';
    }
  }
}
