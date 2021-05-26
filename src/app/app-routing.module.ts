import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes=[
  {path: '',redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters', component: CharactersComponent},
  {path: 'detail/:id', component: CharacterDetailsComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
