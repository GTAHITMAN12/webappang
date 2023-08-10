import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { data, products } from '../data';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  addToCart(product: data) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    this.router.navigate(['Store'])
  }
  product:data | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
