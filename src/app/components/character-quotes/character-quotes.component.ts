import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../Character';
import { Quote } from '../../Quote'

import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-quotes',
  templateUrl: './character-quotes.component.html',
  styleUrls: ['./character-quotes.component.css'],
})
export class CharacterQuotesComponent implements OnInit {
  @Input() character?: string;
  quotes?: Quote[];

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void {
    const characterString = String(this.character).replace(' ', '+');
    console.log(characterString)
    this.characterService
      .getQuotes(characterString)
      .subscribe((quotes) => this.quotes=quotes);
  }
}
