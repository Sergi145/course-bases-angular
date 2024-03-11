import {Component} from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: '../../counter.component.html',
  styleUrl: '../../counter.component.css'
})


export class CounterComponent {

  public numero:number = 0;

  aumentar(valor:number):void {
    this.numero += valor;
  }

  resetear():void {
    this.numero = 0;
  }


}
