import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  logo: string;

  user: User;

  constructor() {
    this.logo = '/assets/logo_superquiz.png';
    this.user = new User({
      name: `Bob l'éponge`,
      email: 'bob@eponge.net'
    });
  }

  ngOnInit() {
  }
}
