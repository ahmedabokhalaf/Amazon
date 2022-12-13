import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryApiService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoryList: ICategory[] = [];
  constructor(private catApiService:CategoryApiService, public translate:TranslateService) {
    translate.addLangs(['en','ar']);
     translate.setDefaultLang('en');

    this.catApiService.getAllCategories().subscribe(cat => { this.categoryList = cat.data.categories});
  }

  switchLanguage(lang:string){
    let htmlTag = document.getElementsByTagName('html')[0] 
htmlTag.dir = lang === "ar"? "rtl":"ltr";
  htmlTag.lang = lang === "ar"? "ar":"en";
this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    
  }
  

  ngOnInit(): void {
    
  }

}
