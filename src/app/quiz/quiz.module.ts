import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { QuizNavComponent } from './quiz-nav/quiz-nav.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes = [
  { path: 'quizzes', component: QuizListComponent},
  { path: 'quiz/:quizId', component: QuizPlayerComponent}
];

@NgModule({
  declarations: [
    QuizListComponent,
    QuizQuestionComponent,
    QuizItemComponent,
    QuizPlayerComponent,
    QuizNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    QuizPlayerComponent
  ],
  providers: [
    { provide: 'JSON_SERVER_URL', useValue: 'http://localhost:3004' }, // Soit la valeur en direct
    { provide: 'SETTINGS', useValue: environment } // Soit, on balance l'environnement
  ]
})
export class QuizModule { }
