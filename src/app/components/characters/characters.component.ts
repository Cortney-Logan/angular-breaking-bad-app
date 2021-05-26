import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from "../../Character"

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.charactersService.getCharacters().subscribe((data) => {
      // console.log(data)
      this.characters = data;
    });
  }
}
