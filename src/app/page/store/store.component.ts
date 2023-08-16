import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data } from 'src/app/data';
 
import { StoreService } from 'src/app/store.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  items !: data[]
  itemForm !: FormGroup;
  isitemAdded: boolean = false;
  edititems :boolean = false;
  newitems = {
    id:0,
    name  :'',
    price :0,
    target_sale :0,
    description :'',
    stock :0
  };
  ids = 0
  constructor(
    private storeService: StoreService,
    private formBuilder: FormBuilder,
  ){}
  ngOnInit():void{
    this.itemForm = this.formBuilder.group({
      name  :[''],
      price :[''],
      target_sale :[''],
      description :[''],
      stock :[''],
    });
    this.getitem();
  }
  
  getitem() {
    this.storeService.getItem().subscribe(
      item => this.items = item
    );
  }
}
