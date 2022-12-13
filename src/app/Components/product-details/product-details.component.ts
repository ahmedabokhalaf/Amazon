import { APP_ID, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  dataProd:Data|undefined=undefined;
  Prod:IProduct|undefined=undefined;
  prdIDsList:number[] = [];
  productList: IProduct[] = [];
  currentPrdID:number=0;

  constructor(private productApiService:ProductApiService,
    private activedRoute: ActivatedRoute,
    private location:Location,
    private router:Router
    ) { 
      this.productApiService.getAllProduct().subscribe(prod => { this.productList = prod.data.products
        this.prdIDsList = this.productList.map(prd=> prd.id);        
      });
    }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(paramMap =>{
      // 
      this.currentPrdID=(paramMap.get('pid'))?Number(paramMap.get('pid')):0;
      this.productApiService.getProductById(this.currentPrdID).subscribe(ip => {
        this.Prod = ip.data.product
       });     
    })
  }
  
  goBack(){
    this.location.back();
  }

}
