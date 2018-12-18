import { Component } from '@angular/core';
import { NavbarItem } from './models/navbar-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  navItemsData: NavbarItem[] = [
    {label: 'Accueil', url: '#'},
    {label: 'Quizzes', url: '#'},
    {label: 'Admin', url: '#'},
    {label: 'Login', url: '#'}
  ];
}
