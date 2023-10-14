import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', ]
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover:string="https://sferaone.es/wp-content/uploads/2023/02/placeholder-1.png"
  @Input()
  cardTitle:string="NOVO INVOCACAO DO MAL ANUNCIADO"

  constructor() { }

  ngOnInit(): void {

  }

}
