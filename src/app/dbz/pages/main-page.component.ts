import {Component} from '@angular/core';
import {Character} from "../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class  DbzComponent  {
  public characters:Character[] = [
    {
      name:'Kriling',
      power: 100
  },
    {
      name:'Goku',
      power: 10000
    },
    {
      name:'Vegeta',
      power: 15000
    },

  ];

  onNewPersonaje (character:Character):void {
    console.log(character);
  }
}



