import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [ AppComponent, NavbarComponent, FooterComponent ],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
