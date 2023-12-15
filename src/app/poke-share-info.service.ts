import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  public stringVar = new Subject<String>();

  getObservable(): Subject<String> {
    return this.stringVar;
  }

  setValue(newStringVar : string){
    this.stringVar.next(newStringVar);
  }

}
