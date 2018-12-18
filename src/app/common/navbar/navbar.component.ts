import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { NavbarItem } from 'src/app/models/navbar-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  @Input() logo: string;
  user: User;
  navItems: Array<NavbarItem>;

  constructor() {
    this.user = new User({
      name: `Bob l'éponge`,
      email: 'bob@eponge.net'
    });
    this.navItems  = [
      {label: 'Accueil', url: '#'},
      {label: 'Quizzes', url: '#'},
      {label: 'Admin', url: '#'},
      {label: 'Login', url: '#'}
    ];
  }

  ngOnInit() {
  }
}
