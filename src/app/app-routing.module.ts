import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './page/store/store.component';
import { AboutComponent } from './page/about/about.component';
import { CartComponent } from './page/cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {path: '' ,component: StoreComponent},
  {path: 'Store' ,component: StoreComponent},
  {path: 'About' ,component: AboutComponent},
  {path: 'Cart' ,component: CartComponent},
  {path: 'Shipping' ,component: ShippingComponent},
  {path: 'products/:productId', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
