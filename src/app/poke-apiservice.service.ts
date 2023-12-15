import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeDetails, PokeServiceRes } from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})

export class PokeAPIServiceService {

  constructor(private http: HttpClient) {
    
   }

   getPokemons() : Observable<PokeServiceRes>{
    return this.http.get<PokeServiceRes>(url)
   }

   getPokemonInfo(id:string) : Observable<PokeDetails>{
    return this.http.get<PokeDetails>(url + id +'/')
   }

}
