import { Component, Input ,OnInit  } from "@angular/core";
import { IProduct } from "src/app/Models/iproduct";
import { ProductApiService } from "src/app/Services/product-api.service";


@Component({
  selector: 'app-sub-products',
  templateUrl: './sub-products.component.html',
  styleUrls: ['./sub-products.component.css']
})
export class SubProductsComponent implements OnInit{
  @Input() receivedCatID: number = 0;
  id:number=0;
  productList: IProduct[] = [];
  constructor(private catApiService:ProductApiService) {
    this.catApiService.getAllProduct().subscribe(cat => { this.productList = cat.data.products});
  }

  ngOnInit(): void {
  }
  ngOnChanges(): void {

    if (this.receivedCatID == 0) {
       this.id=0
    }
    else {
      this.id=1;
    }
  }
}
