import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cartdetail } from './Cartdetail';
import { Data2 } from 'src/app/data2';
import { OrderService } from 'src/app/order.service';
 
 
 


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  isorderAdded: boolean = false;
  editorder :boolean = false;
  store_id:any[]=[];
  price:any[]=[];
  result: any;
  item!:Cartdetail[]
  items:any[]=[]
  neworder = {
    order_id:0,
    name  :'',
    price :0,
    address :'',
    store_id :0,
  };
  
  headers = new HttpHeaders().set('Content-Type','applicattion/json');
  httpOptions = {
    headers: this.headers
  };
  CheckoutForm!: any;


  ngOnInit():void{
    this.CheckoutForm = this.formBuilder.group({
      name  :[''],
      address :[''],
      price :0,
      store_id :0,
    });
    this.cartService.getcart().subscribe(
      (res) =>this.item=res
     
      
    )
    
  }
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ){}
  onSubmit(): void {
    this.cartService.getcart().subscribe(
      (res) => {      this.result = res;
        this.price= this.result.map((coins: any) => coins.price);
        this.store_id= this.result.map((coins: any) =>coins.id);
        for (let i = 0; i < this.price.length; i++){
          this.neworder = this.CheckoutForm.value
          this.neworder.price=this.price.at(i)
          this.neworder.store_id=this.store_id.at(i)
          console.log(this.neworder)
          this.orderService.addorder(this.neworder).subscribe(
            response => {
              this.neworder = response;
              console.log(response);
            }
          )
        }
      }
           
    )
    

    
    //
 
    
    window.alert('Your order has been submitted');
    this.item=[]
    this.cartService.clearCart()
    
  }
}
 