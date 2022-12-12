import { APP_ID, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prd:IProduct|undefined=undefined;
  prdIDsList:number[] = [];
  currentPrdID:number=0;

  constructor(private productService:ProductApiService,
    private activedRoute: ActivatedRoute,
    private location:Location,
    private router:Router

    ) { }

  ngOnInit(): void {
     this.prdIDsList= this.productService.getProductsIDList();

  }

    
  goBack(){
    this.location.back();
  }

}
