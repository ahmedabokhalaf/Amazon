import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryApiService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList: ICategory[] = [];
  selectedCatID: number = 0;
  
  constructor(private catApiService:CategoryApiService) {
    this.catApiService.getAllCategories().subscribe(cat => { this.categoryList = cat.data.categories});
  }

  ngOnInit(): void {
  }

}
