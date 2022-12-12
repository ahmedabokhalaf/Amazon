import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryApiService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoryList: ICategory[] = [];
  constructor(private catApiService:CategoryApiService) {
    this.catApiService.getAllCategories().subscribe(cat => { this.categoryList = cat.data.categories});
  }
  ngOnInit(): void {
  }

}
