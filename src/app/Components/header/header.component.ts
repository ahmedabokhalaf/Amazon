import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoryList: ICategory[] = [];
  prdFilterdList :IProduct[] =[] ; 
  constructor(private catApiService:CategoryApiService,private route: Router) {
    this.catApiService.getAllCategories().subscribe(cat => { this.categoryList = cat.data.categories});

    // })
  }
  ngOnInit(): void {
  }
  openCatDetails(catID: number) {

    // this.route.navigate(['path',parameter])
    this.route.navigate(['Categorys', catID]);
  }

  Search(term:any)
  {
    var res = term.target.value ;
    this.route.navigate(['FilteredProduct',res]) ;

  }
}
