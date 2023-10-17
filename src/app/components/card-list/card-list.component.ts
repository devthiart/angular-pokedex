import { Component, Output } from '@angular/core';
import { PokeAPIService } from 'src/app/services/pokeapi.service';
import { PokeRequest } from './../../models/pokeRequest';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  pokemonReqList:Array<PokeRequest>;
  nextUrlRequest: string;

  constructor( private service:PokeAPIService ) {
    this.pokemonReqList = [];
    this.nextUrlRequest = '';
  }
  ngOnInit():void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.service.getPokemonList(30, 0).subscribe({
      next: (response) => {
        this.nextUrlRequest = Object.values(response)[1].toString();
        const result:any = Object.values(response)[3];

        result.map((pokemon: PokeRequest) => {
          this.pokemonReqList.push(pokemon);
        });
      },
      error: (err) => {console.error(err)}
    })
  }

  @Output() loadNextPokemonList(): void {
    if(this.nextUrlRequest !== null) {
      this.service.getPokemonListByUrl(this.nextUrlRequest).subscribe({
        next: (response) => {
          this.nextUrlRequest = Object.values(response)[1].toString();
          const result:any = Object.values(response)[3];

          result.map((pokemon: PokeRequest) => {
            this.pokemonReqList.push(pokemon);
          });
        }
      });
    }
  }
}
