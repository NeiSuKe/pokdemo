import { Component, Input } from '@angular/core';
import { PokeDetails } from '../pokemon';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrl: './pokedetail.component.css',
  providers: []
})
export class PokedetailComponent {
  [x: string]: any;

  @Input('detail')
  detail!: PokeDetails;

  constructor(private pokeShareInfoService : PokeShareInfoService) {
    this.pokeShareInfoService.getObservable().subscribe(e =>
      console.log('e = ' + e));
  }

  noOnInit(){
    console.log(this['PokeShareInfoService'].getValue());

  }
}
