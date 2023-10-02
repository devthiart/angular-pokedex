import { Component, OnInit } from '@angular/core';
import { PokeData } from 'src/app/models/pokeData';
import { PokeAPIService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokeData;

  constructor( private service:PokeAPIService ) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites:{
        front_default: '',
      },
      types:[],
    }
  }

  ngOnInit():void {
    this.getPokemon("bulbasaur");
  }

  getPokemon(searchName:string) {
    this.service.getPokemonByName(searchName).subscribe(
      {
        next: (response) => {
          this.pokemon = {
            id: response.id,
            name: response.name,
            sprites: response.sprites,
            types: response.types
          }
          console.log(this.pokemon);
        },
        error: (err) => console.log("Not found.")
      }
    )
  }
}
