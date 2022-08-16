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
import { AllmensjacketsComponent } from './allmensjackets/allmensjackets.component';
import { Mensjackets1Component } from './allmensjackets/mensjackets1/mensjackets1.component';
import { Mensjackets2Component } from './allmensjackets/mensjackets2/mensjackets2.component';
import { Mensjackets3Component } from './allmensjackets/mensjackets3/mensjackets3.component';
import { Mensjackets4Component } from './allmensjackets/mensjackets4/mensjackets4.component';
import { Mensjackets5Component } from './allmensjackets/mensjackets5/mensjackets5.component';
import { Mensjackets6Component } from './allmensjackets/mensjackets6/mensjackets6.component';
import { Mensjackets7Component } from './allmensjackets/mensjackets7/mensjackets7.component';
import { AllmenshatsComponent } from './allmenshats/allmenshats.component';
import { Menshats1Component } from './allmenshats/menshats1/menshats1.component';
import { Menshats2Component } from './allmenshats/menshats2/menshats2.component';
import { Menshats3Component } from './allmenshats/menshats3/menshats3.component';
import { Menshats4Component } from './allmenshats/menshats4/menshats4.component';
import { Menshats5Component } from './allmenshats/menshats5/menshats5.component';
import { Menshats6Component } from './allmenshats/menshats6/menshats6.component';
import { Menshats7Component } from './allmenshats/menshats7/menshats7.component';
import { Menshats8Component } from './allmenshats/menshats8/menshats8.component';
import { AllmensshirtsComponent } from './allmensshirts/allmensshirts.component';
import { Mensshirts1Component } from './allmensshirts/mensshirts1/mensshirts1.component';
import { Mensshirts2Component } from './allmensshirts/mensshirts2/mensshirts2.component';
import { Mensshirts3Component } from './allmensshirts/mensshirts3/mensshirts3.component';
import { Mensshirts4Component } from './allmensshirts/mensshirts4/mensshirts4.component';
import { Mensshirts5Component } from './allmensshirts/mensshirts5/mensshirts5.component';
import { Mensshirts6Component } from './allmensshirts/mensshirts6/mensshirts6.component';
import { Mensshirts7Component } from './allmensshirts/mensshirts7/mensshirts7.component';
import { AllmensjeansComponent } from './allmensjeans/allmensjeans.component';
import { Mensjeans1Component } from './allmensjeans/mensjeans1/mensjeans1.component';
import { Mensjeans2Component } from './allmensjeans/mensjeans2/mensjeans2.component';
import { Mensjeans3Component } from './allmensjeans/mensjeans3/mensjeans3.component';
import { Mensjeans4Component } from './allmensjeans/mensjeans4/mensjeans4.component';
import { Mensjeans5Component } from './allmensjeans/mensjeans5/mensjeans5.component';
import { Mensjeans6Component } from './allmensjeans/mensjeans6/mensjeans6.component';
import { ListoneComponent } from './listone/listone.component';
import { WomenshirtsallpageComponent } from './womenshirts/womenshirtsallpage/womenshirtsallpage.component';
import { Womenshirts1Component } from './womenshirts/womenshirts1/womenshirts1.component';
import { Womenshirts2Component } from './womenshirts/womenshirts2/womenshirts2.component';
import { Womenshirts3Component } from './womenshirts/womenshirts3/womenshirts3.component';
import { Womenshirts4Component } from './womenshirts/womenshirts4/womenshirts4.component';
import { Womenshirt5Component } from './womenshirts/womenshirt5/womenshirt5.component';
import { Womenshirt6Component } from './womenshirts/womenshirt6/womenshirt6.component';
import { Womenshirt7Component } from './womenshirts/womenshirt7/womenshirt7.component';
import { Womenshirt8Component } from './womenshirts/womenshirt8/womenshirt8.component';
import { WomenjacketsallpageComponent } from './womenjackets/womenjacketsallpage/womenjacketsallpage.component';
import { Womenjacket1Component } from './womenjackets/womenjacket1/womenjacket1.component';
import { Womenjacket2Component } from './womenjackets/womenjacket2/womenjacket2.component';
import { Womenjacket3Component } from './womenjackets/womenjacket3/womenjacket3.component';
import { Womenjacket4Component } from './womenjackets/womenjacket4/womenjacket4.component';
import { Womenjacket5Component } from './womenjackets/womenjacket5/womenjacket5.component';
import { Womenjacket7Component } from './womenjackets/womenjacket7/womenjacket7.component';
import { Womenjacket6Component } from './womenjackets/womenjacket6/womenjacket6.component';
import { Womenjacket8Component } from './womenjackets/womenjacket8/womenjacket8.component';
import { WomenjeansallpageComponent } from './womenjeans/womenjeansallpage/womenjeansallpage.component';
import { Womenjean1Component } from './womenjeans/womenjean1/womenjean1.component';
import { Womenjean2Component } from './womenjeans/womenjean2/womenjean2.component';
import { Womenjean3Component } from './womenjeans/womenjean3/womenjean3.component';
import { Womenjean4Component } from './womenjeans/womenjean4/womenjean4.component';
import { Womenjean5Component } from './womenjeans/womenjean5/womenjean5.component';
import { Womenjean6Component } from './womenjeans/womenjean6/womenjean6.component';
import { Womenjean7Component } from './womenjeans/womenjean7/womenjean7.component';
import { Womenjean8Component } from './womenjeans/womenjean8/womenjean8.component';
import { PaymentcompletepageComponent } from './components/paymentcompletepage/paymentcompletepage.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: CustomerloginComponent},
  { path: 'register', component: CustomerregisterComponent},
  { path: 'businessregister', component: BusinessregisterComponent},
  { path: 'businesslogin', component: BusinessloginComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'createitem', component: CreateComponent},
  { path: 'edititem/:itemId', component: EditComponent},
  {path: 'inventory', component: InventoryComponent},
  { path: 'inventory/:itemId', component: ListoneComponent},
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
  {path: 'allmensjackets', component:AllmensjacketsComponent},
  {path: 'mensjackets1', component: Mensjackets1Component},
  {path: 'mensjackets2', component: Mensjackets2Component},
  {path: 'mensjackets3', component: Mensjackets3Component},
  {path: 'mensjackets4', component:Mensjackets4Component},
  {path: 'mensjackets5', component:Mensjackets5Component},
  {path: 'mensjackets6', component:Mensjackets6Component},
{path: 'mensjackets7', component: Mensjackets7Component},
{path: 'allmenshats', component: AllmenshatsComponent},
{path: 'menshats1', component: Menshats1Component},
{path: 'menshats2', component: Menshats2Component},
{path: 'menshats3', component: Menshats3Component},
{path: 'menshats4', component: Menshats4Component},
{path: 'menshats5', component: Menshats5Component},
{path: 'menshats6', component:Menshats6Component},
{path: 'menshats7', component: Menshats7Component},
{path: 'menshats8', component: Menshats8Component},
{path: 'allmensshirts', component: AllmensshirtsComponent},
{path: 'mensshirts1', component: Mensshirts1Component},
{path: 'mensshirts2', component: Mensshirts2Component},
{path: 'mensshirts3', component: Mensshirts3Component},
{path: 'mensshirts4', component: Mensshirts4Component},
{path: 'mensshirts5', component: Mensshirts5Component},
{path: 'mensshirts6', component: Mensshirts6Component},
{path: 'mensshirts7', component: Mensshirts7Component},
{path: 'allmensjeans', component: AllmensjeansComponent},
{path: 'mensjeans1', component: Mensjeans1Component},
{path: 'mensjeans2', component: Mensjeans2Component},
{path: 'mensjeans3', component: Mensjeans3Component},
{path: 'mensjeans4', component: Mensjeans4Component},
{path: 'mensjeans5', component:Mensjeans5Component},
{path: 'mensjeans6', component:Mensjeans6Component},
  {path:'allwomenshirts', component:WomenshirtsallpageComponent},
  {path:'womenshirt1', component:Womenshirts1Component},
  {path:'womenshirt2', component:Womenshirts2Component},
  {path:'womenshirt3', component:Womenshirts3Component},
  {path:'womenshirt4', component: Womenshirts4Component},
  {path:'womenshirt5', component: Womenshirt5Component},
  {path:'womenshirt6', component: Womenshirt6Component},
  {path:'womenshirt7', component: Womenshirt7Component},
  {path:'womenshirt8', component:Womenshirt8Component},
  {path:'allwomenjackets', component:WomenjacketsallpageComponent},
  {path:'womenjacket1', component:Womenjacket1Component},
  {path:'womenjacket2', component:Womenjacket2Component},
  {path:'womenjacket3', component:Womenjacket3Component},
  {path:'womenjacket4', component:Womenjacket4Component},
  {path:'womenjacket5', component:Womenjacket5Component},
  {path:'womenjacket6', component:Womenjacket6Component},
  {path:'womenjacket7', component:Womenjacket7Component},
  {path:'womenjacket8', component:Womenjacket8Component},
  {path:'allwomenjeans', component: WomenjeansallpageComponent},
  {path:'womenjean1', component: Womenjean1Component},
  {path:'womenjean2', component:Womenjean2Component},
  {path: 'womenjean3', component:Womenjean3Component},
  {path:'womenjean4',component:Womenjean4Component},
  {path:'womenjean5', component:Womenjean5Component},
  {path:'womenjean6', component:Womenjean6Component},
  {path:'womenjean7', component:Womenjean7Component},
  {path:'womenjean8', component:Womenjean8Component},
  {path:'paymentcomplete', component: PaymentcompletepageComponent},
  { path: '', redirectTo: '', pathMatch:'full'}
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),],

  exports: [RouterModule]
})
export class AppRoutingModule { }
