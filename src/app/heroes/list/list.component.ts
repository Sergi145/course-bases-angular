import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    public arrayHeroes: string[] = ['spiderman','Hulk','Antman']
}