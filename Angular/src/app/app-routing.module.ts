import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { CustomerregisterComponent } from './components/customerregister/customerregister.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusinessregisterComponent } from './components/businessregister/businessregister.component';
import { BusinessloginComponent } from './components/businesslogin/businesslogin.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ViewoneitemComponent } from './components/viewoneitem/viewoneitem.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: CustomerloginComponent},
  { path: 'register', component: CustomerregisterComponent},
  { path: 'registerbusiness', component: BusinessregisterComponent},
  { path: 'businesslogin', component: BusinessloginComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'createitem', component: CreateComponent},
  { path: 'edititem', component: EditComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'viewoneitem', component:ViewoneitemComponent},
  { path: 'payment', component: PaymentComponent},
  { path: '', redirectTo: '', pathMatch:'full'}
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),],

  exports: [RouterModule]
})
export class AppRoutingModule { }
