import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuizService } from 'src/app/quiz/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html'
})
export class QuizFormComponent implements OnInit {

  quizForm: FormGroup;

  constructor(private fb: FormBuilder, private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.quizForm = this.fb.group({
      title: [ ],
      description: [ ],
      canRetryQuestion: [ false ]
    });
  }

  saveQuiz() {
    console.log('saveQuiz', this.quizForm.value);
    this.quizService.saveQuiz(new Quiz(this.quizForm.value)).subscribe((ret: any) => {
      this.router.navigate(['/admin/quiz']);
    });
  }
}
