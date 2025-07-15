import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-parent',
  imports: [CardComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  products=[
    {name:'laptop', price:23000, image:'/laptop.jpg'},
    {name:'smartPhone', price:30000, image:'/smartphone.jpg'},
    {name:'audifonos', price:4500, image:'/audifonos.jpg'}
  ]

}
