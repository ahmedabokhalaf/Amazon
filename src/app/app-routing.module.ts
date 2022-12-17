import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaypalComponent } from 'ngx-paypal';
import { BrandComponent } from './Components/brand/brand.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoryComponent } from './Components/category/category.component';
import { ConfirmComponent } from './Components/confirm/confirm.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PaypalComponent } from './Components/paypal/paypal.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductComponent } from './Components/product/product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

const routes: Routes = [
   // {path:'Main',component:MainLayoutComponent,children:[
    {path:'',component:MainLayoutComponent,children:[
      {path:'',redirectTo:'Home',pathMatch:'full'},// Default path 
      {path:'Home',component: HomeComponent},
      {path:'Products',component:ProductComponent},
      {path:'Products/:pid',component:ProductDetailsComponent},
      {path:'Confirm',component:ConfirmComponent},
      {path: 'Cart', component:CartComponent},
      {path:'Categorys/:catid',component:CategoryComponent},
      {path:'Brands/:brandid',component:BrandComponent},
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