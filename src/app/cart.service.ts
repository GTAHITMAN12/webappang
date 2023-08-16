import { Injectable } from '@angular/core';
 
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StoreService } from './store.service';
 
import { Observable, tap } from 'rxjs';
import { Data3 } from './page/cart/data3';
import { data } from './data';
import { Cartdetail } from './page/cart/Cartdetail';

 
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  headers = new HttpHeaders().set('Content-Type','application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(
    private http: HttpClient,
    private stores: StoreService
  ) { }
  cart: Data3[]= [];
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('assets/shipping.json');
  }
  addToCart(id:number): Observable<number>{
      const body = new HttpParams()
      .set('store_id', id)
      console.log(body)

      let obs= this.http.post<any>('http://localhost:3000/cart/addnew',body,{headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')})
      return  obs;
      
    }

  getcart() {
    return this.http.get<Cartdetail[]>
    ('http://localhost:3000/cart')
    .pipe(tap(items => {
      console.log('item fetched...');
      console.log(items); })
    );
  }

  clearCart() {
    return   this.http.delete<any>('http://localhost:3000/cart').subscribe(
      response => {
         
        console.log(response);
        
      }
    );
  }
}
