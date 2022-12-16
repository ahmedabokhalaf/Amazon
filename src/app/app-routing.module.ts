import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaypalComponent } from 'ngx-paypal/public_api';
 


import { BrandComponent } from './Components/brand/brand.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoryComponent } from './Components/category/category.component';
import { ConfirmComponent } from './Components/confirm/confirm.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductComponent } from './Components/product/product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { PaypalComponent } from './paypal/paypal.component';

const routes: Routes = [
   // {path:'Main',component:MainLayoutComponent,children:[
    {path:'',component:MainLayoutComponent,children:[
      {path:'',redirectTo:'Home',pathMatch:'full'},// Default path 
      {path:'Home',component: HomeComponent},
      {path:'Products',component:ProductComponent},
      {path:'Products/:pid',component:ProductDetailsComponent},
      {path:'Brands',component:BrandComponent},
      {path:'Categorys',component:CategoryComponent},
      {path:'Confirm',component:ConfirmComponent},
      {path: 'Cart', component:CartComponent}
 
    ]},
    {path:'Payment', component: PaypalComponent},
     {path:'register',component: UserRegisterComponent},
     {path:'login',component: LoginComponent},
     {path:'**',component:NotFoundComponent}//wildcard path 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }