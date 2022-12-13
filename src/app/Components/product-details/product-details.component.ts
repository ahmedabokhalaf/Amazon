import { APP_ID, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

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
    private router:Router,
    public translate:TranslateService

    ) { 
      translate.addLangs(['en','ar']);
      translate.setDefaultLang('en');
    }

  ngOnInit(): void {
     this.prdIDsList= this.productService.getProductsIDList();
    
  }
  switchLanguage(lang:string){
    let htmlTag = document.getElementsByTagName('html')[0] 
htmlTag.dir = lang === "ar"? "rtl":"ltr";
  htmlTag.lang = lang === "ar"? "ar":"en";
this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    
  }
    
  goBack(){
    this.location.back();
  }

}
