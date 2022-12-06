import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

const routes: Routes = [
   // {path:'Main',component:MainLayoutComponent,children:[
    {path:'',component:MainLayoutComponent,children:[
      {path:'',redirectTo:'Home',pathMatch:'full'},// Default path 
      {path:'Home',component: HomeComponent},
      {path:'Products',component:ProductComponent},
    ]},
     {path:'register',component: UserRegisterComponent},
     {path:'**',component:NotFoundComponent}//wildcard path 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
