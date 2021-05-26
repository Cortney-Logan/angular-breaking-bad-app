import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from '../../Character';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  @Input() character?: Character;

  constructor(
    private characterService: CharactersService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterService.getCharacter(id).subscribe((character) => {
      this.character = character[0];
      console.log(this.character);
    });
  }
}
