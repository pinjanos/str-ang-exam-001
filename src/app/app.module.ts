import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeroesComponent } from './page/heroes/heroes.component';
import { NavigationComponent } from './common/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
