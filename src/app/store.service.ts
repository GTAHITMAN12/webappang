import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
import { Observable,} from 'rxjs';
import { tap} from 'rxjs/operators';
import { data } from './data';
import { Cartdetail } from './page/cart/Cartdetail';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(
    private http: HttpClient
  ) { }

  headers = new HttpHeaders().set('Content-Type','applicattion/json');
  httpOptions = {
    headers: this.headers
  };

  items: data[] = [];
  additem(value:data): Observable<data>{
    const body = new HttpParams()
    .set('id', value.id)
    .set('name', value.name)
    .set('price', value.price)
    .set('target_sale', value.target_sale)
    .set('description', value.description)
    .set('stock', value.stock);

    let obs= this.http.post<data>
    ('http://localhost:3000/store/additem',body.toString(),{headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')});
    return obs;
  }

  getItem(): Observable<data[]>{
    return this.http.get<data[]>
    ('http://localhost:3000/store')
    .pipe(tap(items => {
      console.log('item fetched...');
      console.log(items); })
    );
  };

  getItems(id: number): Observable<data[]> {
    return this.http.get<data[]>(`http://localhost:3000/store/${id}`).pipe(tap(order => {
      console.log('item is pick from store');
      console.log(order); })
    );
  };
  
  edititem(id: number,value:data): Observable<data> {
    const body = new HttpParams()
    .set('id', value.id)
    .set('name', value.name)
    .set('price', value.price)
    .set('target_sale', value.target_sale)
    .set('description', value.description)
    .set('stock', value.stock);
    return this.http.put<data>(`http://localhost:3000/store/${id}`,body.toString(),{headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')});
  }

  // Delete
  delete(id: number): Observable<data> {
    return this.http.delete<data>(`http://localhost:3000/store/${id}`,this.httpOptions);
  }

 

}
