import { CartService } from 'src/app/Services/cart.service';
 
import { JsonPipe } from '@angular/common';
import { Component, IterableDiffers, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { CartModel } from 'src/app/Models/cart-model';
 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  cartProducts: CartModel[] = []
  Prod:IProduct[]=[]
  prdListOfCat: any;
  Iproduct = []=[];
   
 
  constructor(private cartService: CartService) {
   
   }
 
  ngOnInit(): void {
    this.getProductFromCart()
     
  }
  
  
  getProductFromCart(){
    if ("MyCart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("MyCart")!); //to get the array of products from localStorag  
  }
 }
}