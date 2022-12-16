
import { Component, OnInit } from '@angular/core';
import { APP_ID, EventEmitter, Input,   Output } from '@angular/core';

import { ActivatedRoute, Data, Router } from '@angular/router';

 
import { DataProduct, IProduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Location } from '@angular/common';
import { CartService } from 'src/app/Services/cart.service';
 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() data:any={};
  @Output() item=new EventEmitter();
  
  dataProd:Data|undefined=undefined;
  Prod:IProduct|undefined=undefined;


 
 
  prdIDsList:number[] = [];
  productList: DataProduct[] = [];
  currentPrdID:number=0;

 

  brandName:string=""
  catName:string=""

  constructor(private productApiService:ProductApiService,
    private activedRoute: ActivatedRoute,
    private location:Location,
    private router:Router,
    private cartService: CartService
    ) {
      this.productApiService.getAllProduct().subscribe(prod => { this.productList = prod.data.products
        this.prdIDsList = this.productList.map(prd=> prd.product.id);        
      });
     }

  ngOnInit(): void {
     this.activedRoute.paramMap.subscribe(paramMap =>{
      
      this.currentPrdID=(paramMap.get('pid'))?Number(paramMap.get('pid')):0;

      this.productApiService.getProductById(this.currentPrdID).subscribe(p => {
        this.Prod = p.data.product
        this.brandName=p.data.brandName
        this.catName = p.data.categoryName
       });     
    })
  }
  
  goBack(){
    this.location.back();
  }

 
  AddToCart(){
    this.item.emit(this.data);
  }
 

}
 

