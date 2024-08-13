import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
