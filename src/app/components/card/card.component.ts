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
  firstType:string;

  constructor( private service:PokeAPIService ) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites:{
        front_default: '',
      },
      types:[],
    }
    this.firstType = ''
  }

  ngOnInit():void {
    this.getPokemonByName("bulbasaur");
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
          console.log(this.pokemon);
        },
        error: (err) => console.log("Not found.")
      }
    )
  }
}
