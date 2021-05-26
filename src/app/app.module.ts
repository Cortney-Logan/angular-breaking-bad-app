import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterQuotesComponent } from './components/character-quotes/character-quotes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HeaderComponent,
    CharacterDetailsComponent,
    CharacterQuotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
