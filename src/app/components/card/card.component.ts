import { Component, Input, OnInit } from '@angular/core';
import { PokeData } from 'src/app/models/pokeData';
import { PokeRequest } from 'src/app/models/pokeRequest';
import { PokeAPIService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './color-types.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokeData;
  firstType:string;
  @Input() pokemonRequestData: PokeRequest;

  constructor( private service:PokeAPIService ) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites:{
        front_default: '',
      },
      types:[],
    };

    this.firstType = '';

    this.pokemonRequestData = {
      name: '',
      url: ''
    };
  }

  ngOnInit():void {
    this.getPokemonByUrl(this.pokemonRequestData.url);
  }

  getPokemonByUrl(url: string) {
    this.service.getPokemonByUrl(url).subscribe(
      {
        next: (response) => {
          this.pokemon = {
            id: response.id,
            name: response.name,
            sprites: response.sprites,
            types: response.types
          }
          this.firstType = this.pokemon.types[0].type.name;
        },
        error: (err) => console.error(err)
      }
    )
  }

  getPokemonByName(searchName:string) {
    this.service.getPokemonByName(searchName).subscribe(
      {
        next: (response) => {
          this.pokemon = {
            id: response.id,
            name: response.name,
            sprites: response.sprites,
            types: response.types
          }
          this.firstType = this.pokemon.types[0].type.name;
        },
        error: (err) => console.log(err)
      }
    )
  }
}
