import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { StoreService } from '../store.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from '../data';
import { Data3 } from '../page/cart/data3';
import { FormBuilder } from '@angular/forms';
import { NumberFormatStyle } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  result: any;
  productid : any;
  productprice: any;
  productname: any;
  productdescription: any;
  productIdFromRoute!:number;
  http: any;
  cart!: Data3[];
  newcart = {
    id:0, 
    store_id:0,     
  };
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private stores:StoreService,
    private fb: FormBuilder
    ) { }
  ngOnInit(): void {
    

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
    this.stores.getItems(parseInt(productIdFromRoute!)).subscribe(
      (res) => {      this.result = res;
        this.productid = this.result.map((coins: any) => coins.id);
        this.productprice = Number(this.result.map((coins: any) =>coins.price));
        this.productname = this.result.map((coins: any) => coins.name);
        this.productdescription = this.result.map((coins: any) => coins.description);
      })
  }
  addTo(productid:number):void{
 
 
    this.cartService.addToCart(Number(productid)).subscribe(
      response => {
         
        console.log(response);
        
      }
    );
    window.alert('Your product has been added to the cart!');
  }
}
