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
import { WomenshoesallpageComponent } from './women-shoes/womenshoesallpage/womenshoesallpage.component';
import { Womenshoes1Component } from './women-shoes/womenshoes1/womenshoes1.component';
import { Womenshoes2Component } from './women-shoes/womenshoes2/womenshoes2.component';
import { Womenshoes3Component } from './women-shoes/womenshoes3/womenshoes3.component';
import { Womenshoes4Component } from './women-shoes/womenshoes4/womenshoes4.component';
import { Womenshoes5Component } from './women-shoes/womenshoes5/womenshoes5.component';
import { Womenshoes6Component } from './women-shoes/womenshoes6/womenshoes6.component';
import { Womenshoes7Component } from './women-shoes/womenshoes7/womenshoes7.component';
import { Womenshoes8Component } from './women-shoes/womenshoes8/womenshoes8.component';
import { Womenshoes9Component } from './women-shoes/womenshoes9/womenshoes9.component';
import { Womenshoes10Component } from './women-shoes/womenshoes10/womenshoes10.component';
import { Womenshoes11Component } from './women-shoes/womenshoes11/womenshoes11.component';
import { Womenshoes12Component } from './women-shoes/womenshoes12/womenshoes12.component';
import { Womenshoes13Component } from './women-shoes/womenshoes13/womenshoes13.component';
import { Womenshoes14Component } from './women-shoes/womenshoes14/womenshoes14.component';
import { Womenshoes15Component } from './women-shoes/womenshoes15/womenshoes15.component';
import { Womenshoes16Component } from './women-shoes/womenshoes16/womenshoes16.component';
import { AllmensshoesComponent } from './allmensshoes/allmensshoes.component';
import { Mensshoes1Component } from './allmensshoes/mensshoes1/mensshoes1.component';
import { Mensshoes2Component } from './allmensshoes/mensshoes2/mensshoes2.component';
import { Mensshoes3Component } from './allmensshoes/mensshoes3/mensshoes3.component';
import { Mensshoes4Component } from './allmensshoes/mensshoes4/mensshoes4.component';
import { Mensshoes5Component } from './allmensshoes/mensshoes5/mensshoes5.component';
import { Mensshoes6Component } from './allmensshoes/mensshoes6/mensshoes6.component';
import { Mensshoes7Component } from './allmensshoes/mensshoes7/mensshoes7.component';
import { Mensshoes8Component } from './allmensshoes/mensshoes8/mensshoes8.component';
import { Mensshoes9Component } from './allmensshoes/mensshoes9/mensshoes9.component';
import { Mensshoes10Component } from './allmensshoes/mensshoes10/mensshoes10.component';
import { AllmenshatsComponent } from './allmenshats/allmenshats.component';
import { Menshats1Component } from './allmenshats/menshats1/menshats1.component';
import { Menshats2Component } from './allmenshats/menshats2/menshats2.component';
import { Menshats3Component } from './allmenshats/menshats3/menshats3.component';
import { Menshats4Component } from './allmenshats/menshats4/menshats4.component';
import { Menshats5Component } from './allmenshats/menshats5/menshats5.component';
import { Menshats6Component } from './allmenshats/menshats6/menshats6.component';
import { Menshats7Component } from './allmenshats/menshats7/menshats7.component';
import { Menshats8Component } from './allmenshats/menshats8/menshats8.component';
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
  {path: 'allwomenshoes', component: WomenshoesallpageComponent},
  {path: 'womenshoes1', component: Womenshoes1Component},
  {path: 'womenshoes2', component: Womenshoes2Component},
  {path: 'womenshoes3', component: Womenshoes3Component},
  {path: 'womenshoes4', component: Womenshoes4Component},
  {path:'womenshoes5', component:Womenshoes5Component},
  {path:'womenshoes6', component:Womenshoes6Component},
  {path:'womenshoes7', component:Womenshoes7Component},
  {path:'womenshoes8', component:Womenshoes8Component},
  {path:'womenshoes9', component:Womenshoes9Component},
  {path: 'womenshoes10', component:Womenshoes10Component},
  {path:'womenshoes11', component:Womenshoes11Component},
  {path:'womenshoes12', component:Womenshoes12Component},
  {path:'womenshoes13', component: Womenshoes13Component},
  {path:'womenshoes14', component:Womenshoes14Component},
  {path:'womenshoes15', component:Womenshoes15Component},
  {path:'womenshoes16', component:Womenshoes16Component},
  {path:'allmensshoes', component:AllmensshoesComponent},
  {path:'mensshoes1', component:Mensshoes1Component},
  {path:'mensshoes2', component:Mensshoes2Component},
  {path:'mensshoes3', component:Mensshoes3Component},
  {path:'mensshoes4', component:Mensshoes4Component},
  {path:'mensshoes5',  component: Mensshoes5Component},
  {path:'mensshoes6', component:Mensshoes6Component},
  {path: 'mensshoes7', component: Mensshoes7Component},
  {path:'mensshoes8', component: Mensshoes8Component},
  {path:'mensshoes9', component:Mensshoes9Component},
  {path:'mensshoes10', component:Mensshoes10Component},
  {path: 'allmenshats', component: AllmenshatsComponent},
  {path: 'menshats1', component: Menshats1Component},
  {path:'menshats2', component:Menshats2Component},
  {path: 'menshats3', component: Menshats3Component},
  {path: 'menshats4', component: Menshats4Component},
  {path: 'menshats5', component:Menshats5Component},
{path: 'menshats6', component: Menshats6Component},
{path: 'menshats7', component: Menshats7Component},
{path: 'menshats8', component: Menshats8Component},
  { path: '', redirectTo: '', pathMatch:'full'}
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),],

  exports: [RouterModule]
})
export class AppRoutingModule { }
