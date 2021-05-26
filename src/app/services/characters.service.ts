import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../Character';
import { Quote } from '../Quote'

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private apiUrl = 'https://breakingbadapi.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  getCharacter(id: number): Observable<Character[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Character[]>(url);
  }

  getQuotes(author: string){
    const url = `https://www.breakingbadapi.com/api/quote?author=${author}`;
    console.log("getting quotes")
    return this.http.get<Quote[]>(url)
  }
}
