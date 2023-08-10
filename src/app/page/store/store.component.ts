import { Component } from '@angular/core';
import { products } from 'src/app/data';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  products=products
}
console.log(products)