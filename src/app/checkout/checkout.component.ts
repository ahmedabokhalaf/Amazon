import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetails, OrderItems } from '../Models/order';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  selectedType:string ;
  userFormGroup: FormGroup;
  order: OrderDetails = {} as OrderDetails;
  orderItm:OrderItems = {} as OrderItems ;
  success = false;
  errMessage = ''
  constructor(private formbuilder: FormBuilder, private orderApiService: OrderService, private router: Router) {
{
  this.orderItm.productId = 1004 ;
  this.orderItm.quantity = 50  ;
  this.orderItm.price = 1000 ;
    this.userFormGroup = this.formbuilder.group({
      quantity: ['', [Validators.required]],
  
    })
  }
}

  get quantity() {
    return this.userFormGroup.get('quantity');
  }
  
  ngOnInit(): void {
  }
  CreateOrder() {
    
    // this.order = this.userFormGroup.value;
    this.order.userId = "4bf96068-149a-478a-8eb6-f3460f88bed3" ;
    this.order.totalPrice=1000 ;
    this.order.address = "Sohag" ;
    this.order.street = "Elsabil" ;
    this.order.paymentMethod = "cash" ;
    this.order.orderItems =  this.orderItm;
    

    this.orderApiService.CreateOrder(this.order).subscribe(
      {next: (res) => {
        if (res.success==true){
            console.log(res.message);
            
        }
      else{
        console.log(res.message);
          
      }
      
     }
     ,error : (err) =>{
       if(err.error.code == 11000){
         this.errMessage= 'User already exists!! Try something else.';
         console.log(this.errMessage);
       }
         
       else {
         this.errMessage= 'Something went wrong!!';
         console.log(this.errMessage);
       }
     }})
  }
}
