import { Injectable } from '@angular/core';
import { data } from './data';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient
  ) { }
  items: data[] = [];
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('assets/shipping.json');
  }
  
  addToCart(product: data) {
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
