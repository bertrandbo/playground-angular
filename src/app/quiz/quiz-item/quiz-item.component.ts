import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styles: []
})
export class QuizItemComponent implements OnInit {

  @Input() item: Quiz;

  constructor() { }

  ngOnInit() {
  }

}
