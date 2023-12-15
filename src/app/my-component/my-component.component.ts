import { Component } from '@angular/core';
import { PokeDetails, Pokemon } from '../pokemon';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent {
[x: string]: any;

  id: string = '';
  selectedPokeId!: string;
  searchPokeName = "";
  pokes: Pokemon[] = [];
  pokeDetail!: PokeDetails;
  constructor(private pokeService : PokeAPIServiceService, private PokeShareInfoService: PokeShareInfoService ) {
  }

  ngOnInit() : void{
    this.pokeService.getPokemons().subscribe(data => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon('' + (index+1), e.name, e.url));
      });
    });
  }

  go() {
    this.PokeShareInfoService.setValue(this.selectedPokeId)
    if(this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe( data =>
        this.pokeDetail = data)
        this.PokeShareInfoService.setValue(this.selectedPokeId);
    }
  }
}
