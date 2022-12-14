import { Component, EventEmitter, Input ,OnInit, Output  } from "@angular/core";
import { Router } from "@angular/router";
import { IProduct } from "src/app/Models/iproduct";
import { BrandApiService } from "src/app/Services/brand-api.service";
import { ProductApiService } from "src/app/Services/product-api.service";


@Component({
  selector: 'app-sub-products',
  templateUrl: './sub-products.component.html',
  styleUrls: ['./sub-products.component.css']
})
export class SubProductsComponent implements OnInit{
  @Input() receivedBrandID: number = 0;
  @Input() receivedCatName: string = "";

  id:number=0;
  productList: IProduct[] = [];
  prdListOfBrand:IProduct[]=[];

  constructor(private productApiService:ProductApiService,private brandApiService:BrandApiService,private route: Router) {
    this.productApiService.getAllProduct().subscribe(prod => { this.productList = prod.data.products
      this.prdListOfBrand = this.productList;
    });
    
  }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if (this.receivedBrandID == 0) {

      this.productApiService.getAllProduct().subscribe(prd => { this.productList = prd.data.products
        this.prdListOfBrand = this.productList;
      });
     
    }
    else {
     this.getProductsOfBrandID();
    }
  }
  private getProductsOfBrandID()
  {
    this.prdListOfBrand= this.productList.filter((prd)=>prd.brandId==this.receivedBrandID);
  }
  openPrdDetails(prdID: number) {

    // this.route.navigate(['path',parameter])
    this.route.navigate(['Products', prdID]);
  }
  
}
