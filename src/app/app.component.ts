import { Component } from '@angular/core';
import { NavbarItem } from './models/navbar-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  navItemsData: NavbarItem[] = [
    {label: 'Accueil', url: 'home'},
    {label: 'Quizzes', url: 'quizzes'},
    {label: 'Admin', url: 'admin'},
    {label: 'Login', url: ''}
  ];
}
