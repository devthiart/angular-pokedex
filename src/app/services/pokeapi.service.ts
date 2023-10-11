import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PokeData } from '../models/pokeData';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  private baseURL:string = "";
  private pokeData:PokeData | any;
  private listPokeData: Array<PokeData> | any;

  constructor( private http: HttpClient ) {
    this.baseURL = environment.pokeApi;
  }

  getPokemonList(limit: Number, offset: Number): Observable<PokeData[]> {
    const url:string = `${this.baseURL}?limit=${limit}&offset=${offset}`;
    this.listPokeData = this.http.get<PokeData[]>(url);
    return this.listPokeData;
  }

  getPokemonByName(pokemonName: string): Observable<PokeData> {
    this.pokeData = this.http.get<PokeData>(`${this.baseURL}${pokemonName}`);
    return this.pokeData;
  }

  getPokemonByUrl(pokeApiUrl: string): Observable<PokeData> {
    this.pokeData = this.http.get<PokeData>(pokeApiUrl);
    return this.pokeData;
  }
}
