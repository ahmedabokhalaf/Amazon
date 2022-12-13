import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductComponent } from './Components/product/product.component';
import { CategoryComponent } from './Components/category/category.component';
import { BrandComponent } from './Components/brand/brand.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';



import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SubProductsComponent } from './Components/sub-products/sub-products.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaypalComponent } from './paypal/paypal.component';

 



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        SideMenuComponent,
        UserRegisterComponent,
        MainLayoutComponent,
        NotFoundComponent,
        HeaderComponent,
        ProductComponent,
        CategoryComponent,
        BrandComponent,
        CartComponent,
        LoginComponent,
        SubProductsComponent,
        ProductDetailsComponent,
        PaypalComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxPayPalModule
    ]
})
export class AppModule { }