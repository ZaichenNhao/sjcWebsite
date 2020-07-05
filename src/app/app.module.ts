import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeadPicComponent } from './landing/head-pic/head-pic.component';
import { AboutComponent } from './landing/about/about.component';
import { FooterComponent } from './landing/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeadPicComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
