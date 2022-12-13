import { Component, Input ,OnInit  } from "@angular/core";


@Component({
  selector: 'app-sub-products',
  templateUrl: './sub-products.component.html',
  styleUrls: ['./sub-products.component.css']
})
export class SubProductsComponent implements OnInit{
  @Input() receivedCatID: number = 0;
  id:number=0;
  constructor() { }

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
