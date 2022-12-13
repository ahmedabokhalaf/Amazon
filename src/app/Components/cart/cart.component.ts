import { JsonPipe } from '@angular/common';
import { Component, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: any[] = []
  constructor() { }

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
    else {
      this.cartProducts.push(event);//to push the new product in the array
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));//to add new array on the localStorage for the first Time
    }
  }
}
