import { CartService } from 'src/app/Services/cart.service';
import { JsonPipe } from '@angular/common';
import { Component, IterableDiffers, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { CartModel } from 'src/app/Models/cart-model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  cartProducts: CartModel[] = []
  Prod: IProduct[] = []
  prdListOfCat: any;
  Iproduct = [] = [];

  constructor(private cartService: CartService, private route: Router) {

  }

  ngOnInit(): void {
    this.getProductFromCart()

  }

  opencheckDetails(prodID: number) {
    // this.route.navigate(['path',parameter])
    this.route.navigate(['checkout', prodID]);
  }
  getProductFromCart() {
    if ("MyCart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("MyCart")!); //to get the array of products from localStorag  
    }
  }
  deleteItem(id: number) {

    var items = JSON.parse(localStorage.getItem("MyCart")); // updated
    for (var i =0; i< items.length; i++) {
      var items = JSON.parse(items[i]);
      if (items.itemId == id) {
          items.splice(i, 1);
      }
      items = JSON.stringify(items); //Restoring object left into items again
      localStorage.setItem("items", items);

  }

    /* var cartItems = localStorage.getItem('MyCart');
    cartItems = JSON.parse(cartItems)

    if (cartItems) {
      var itemKeys = Object.keys(cartItems);
      for (var i = 0; i < itemKeys.length; i++) {
        var key = itemKeys[i]
        console.log(key)//in this case prints: Jack Daniels 1L, as desired.
        if (title === key) {
          localStorage.removeItem(key)
        }
      }
      localStorage.removeItem("MyCart"); */
    }
}



