import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  IProduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Location } from '@angular/common';
import { CartService } from 'src/app/Services/cart.service';
 
 
 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  [x: string]: any;

  prd:IProduct|undefined=undefined;
  prdIDsList:number[] = [];
  currentPrdID:number=0;
  product:IProduct[]=[];
 

  constructor(private productService:ProductApiService,
    private activedRoute: ActivatedRoute,
    private location:Location,
    private router:Router,
    private cartService: CartService
    ) {
      
     }

  ngOnInit(): void {
     this.prdIDsList= this.productService.getProductsIDList();
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

    
  goBack(){
    this.location.back();
  }
 
}
 

