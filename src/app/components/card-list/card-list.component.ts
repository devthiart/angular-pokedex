import { Component } from '@angular/core';
import { PokeAPIService } from 'src/app/services/pokeapi.service';
import { PokeRequest } from './../../models/pokeRequest';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  pokemonReqList:Array<PokeRequest> = [];

  constructor( private service:PokeAPIService ) {
    this.pokemonReqList = [];
  }
  ngOnInit():void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.service.getPokemonList(151, 0).subscribe({
      next: (response) => {
        const result:any = Object.values(response)[3];

        result.map((pokemon: PokeRequest) => {
          this.pokemonReqList.push(pokemon);
        });
      },
      error: (err) => {console.error(err)}
    })
  }
}
