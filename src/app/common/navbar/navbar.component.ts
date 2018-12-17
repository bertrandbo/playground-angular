import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  logo: string;

  constructor() {
    this.logo = '/assets/logo_superquiz.png';
  }

  ngOnInit() {
  }

}
