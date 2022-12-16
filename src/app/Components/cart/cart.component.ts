 
 
import { CartService } from 'src/app/Services/cart.service';
 
import { JsonPipe } from '@angular/common';
import { Component, IterableDiffers, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  cartProducts: any[] = []
  Prod:IProduct[]=[]
   
 
  constructor(private cartService: CartService) {
   
   }
 
 
 
 

  ngOnInit(): void {
  }
  
  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!); //to get the array of products from localStorage
      let isExist = this.cartProducts.find(item => item.id == event.id);
      //This Check for prevent the Repetition of products
      if(isExist){
        alert("This product is already on your cart!");
      }
      else{
        this.cartProducts.push(event);//to push the new product in the array
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));//to override new array on the localStorage
      }
    }
    
  }
}
