import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './common/home/home.component';

@NgModule({
  declarations: [ AppComponent, NavbarComponent, FooterComponent, HomeComponent ],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
