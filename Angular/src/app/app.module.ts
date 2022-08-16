import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {OwlModule} from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { CustomerregisterComponent } from './components/customerregister/customerregister.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { BusinessregisterComponent } from './components/businessregister/businessregister.component';
import { BusinessloginComponent } from './components/businesslogin/businesslogin.component';
import { CartComponent } from './components/cart/cart.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { ViewoneitemComponent } from './components/viewoneitem/viewoneitem.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FooterComponent } from './footer/footer.component';
import { AllmensshoesComponent } from './allmensshoes/allmensshoes.component';
import { Mensshoes1Component } from './allmensshoes/mensshoes1/mensshoes1.component';
import { Mensshoes2Component } from './allmensshoes/mensshoes2/mensshoes2.component';
import { Mensshoes3Component } from './allmensshoes/mensshoes3/mensshoes3.component';
import { AllmenshatsComponent } from './allmenshats/allmenshats.component';
import { Menshats1Component } from './allmenshats/menshats1/menshats1.component';
import { Menshats2Component } from './allmenshats/menshats2/menshats2.component';
import { Menshats3Component } from './allmenshats/menshats3/menshats3.component';
import { Menshats4Component } from './allmenshats/menshats4/menshats4.component';
import { Menshats5Component } from './allmenshats/menshats5/menshats5.component';
import { Menshats6Component } from './allmenshats/menshats6/menshats6.component';
import { Menshats7Component } from './allmenshats/menshats7/menshats7.component';
import { Menshats8Component } from './allmenshats/menshats8/menshats8.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CustomerloginComponent,
    CustomerregisterComponent,
    HomeComponent,
    ShopComponent,
    BusinessregisterComponent,
    BusinessloginComponent,
    CartComponent,
    InventoryComponent,
    EditComponent,
    CreateComponent,
    ViewoneitemComponent,
    PaymentComponent,
    FooterComponent,
    AllmensshoesComponent,
    Mensshoes1Component,
    Mensshoes2Component,
    Mensshoes3Component,
    AllmenshatsComponent,
    Menshats1Component,
    Menshats2Component,
    Menshats3Component,
    Menshats4Component,
    Menshats5Component,
    Menshats6Component,
    Menshats7Component,
    Menshats8Component
   
  

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OwlModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
