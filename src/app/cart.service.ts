import { Injectable } from '@angular/core';
import { Data } from './data copy';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient
  ) { }
  items: Data[] = [];
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('assets/shipping.json');
  }
  
  addToCart(product: Data) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
