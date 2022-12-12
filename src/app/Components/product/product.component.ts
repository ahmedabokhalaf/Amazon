import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Location } from '@angular/common';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() receivedBrandID:number = 0;
  prd:IProduct[]=[];

  constructor(private productService:ProductApiService,
    private activedRoute: ActivatedRoute,
    private location:Location,
    private router:Router) { }

  ngOnInit(): void {
  }

  OpenProDetails(prdID:number){

     
    this.router.navigate(['Product',prdID]);
  }

}
