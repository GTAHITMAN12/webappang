import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { data } from 'src/app/data';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  isorderAdded: boolean = false;
  editorder :boolean = false;
  neworder = {
    name  :'',
    price :0,
    address :'',
    store_id :0,
  };
  items = this.cartService.getItems();
  headers = new HttpHeaders().set('Content-Type','applicattion/json');
  httpOptions = {
    headers: this.headers
  };
  CheckoutForm!: any;
  orderService: any;
  ngOnInit():void{
    this.CheckoutForm = this.formBuilder.group({
      name  :[''],
      address :[''],
 
    });
  }
  constructor(
    private cartService: CartService,
 
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ){}
  onSubmit(): void {
    
    this.neworder = this.CheckoutForm.value
    this.neworder.name=this.CheckoutForm.name
    this.neworder.address=this.CheckoutForm.address
    const body = new HttpParams()
     // Process checkout data here
     this.orderService.addorder(this.neworder).subscribe(
       (       response: { name: string; price: number; address: string; store_id: number; }) => {
         this.neworder = response;
         console.log(response);
         this.isorderAdded=true;
       }
     );
 
    this.items = this.cartService.clearCart();
    window.alert('Your order has been submitted');
    console.log(this.CheckoutForm.value)
    this.CheckoutForm.reset();
  }
}
 