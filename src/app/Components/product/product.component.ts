import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IBrand } from 'src/app/Models/ibrand';
import { ICategory } from 'src/app/Models/icategory';
import { BrandApiService } from 'src/app/Services/brand-api.service';
import { CategoryApiService } from 'src/app/Services/category-api.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() receivedCatID: number = 0;
  categoryList: ICategory[] = [];
  brandList: IBrand[] = [];

  selectedBrandID: number = 0;
  selectedCatID: number = 0;


  constructor(private brandApiService:BrandApiService,private catApiService:CategoryApiService) {
    this.catApiService.getAllCategories().subscribe(cat => { this.categoryList = cat.data.categories});
    this.brandApiService.getAllBrands().subscribe(brand => { this.brandList = brand.data.brands});
   }

  ngOnInit(): void {
  }

}