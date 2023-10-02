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

  constructor( private http:HttpClient ) {
    this.baseURL = environment.pokeApi;
  }

  getPokemon():Observable<PokeData>{
    this.pokeData = this.http.get<PokeData>(`${this.baseURL}?limit=100000&offset=0`);
    return this.pokeData;
  }

  getPokemonByName(pokemonName:string):Observable<PokeData>{
    this.pokeData = this.http.get<PokeData>(`${this.baseURL}${pokemonName}`);
    return this.pokeData;
  }
}
