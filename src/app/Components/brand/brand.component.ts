import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/Models/ibrand';
import { BrandApiService } from 'src/app/Services/brand-api.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  BrandList : IBrand[] = [];
  SelectedBrandID :number =0;

  constructor(private brandApiService : BrandApiService) { 
    this.brandApiService.getAllBrands().subscribe(brands =>{this.BrandList = brands.data.brands} ) 
  }

  ngOnInit(): void {
  }

}
