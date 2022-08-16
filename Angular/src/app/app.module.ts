import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {OwlModule} from 'ngx-owl-carousel';
import { FormsModule } from '@angular/forms';
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
import { AllmensjacketsComponent } from './allmensjackets/allmensjackets.component';
import { Mensjackets1Component } from './allmensjackets/mensjackets1/mensjackets1.component';
import { Mensjackets2Component } from './allmensjackets/mensjackets2/mensjackets2.component';
import { Mensjackets3Component } from './allmensjackets/mensjackets3/mensjackets3.component';
import { Mensjackets4Component } from './allmensjackets/mensjackets4/mensjackets4.component';
import { Mensjackets5Component } from './allmensjackets/mensjackets5/mensjackets5.component';
import { Mensjackets6Component } from './allmensjackets/mensjackets6/mensjackets6.component';
import { Mensjackets7Component } from './allmensjackets/mensjackets7/mensjackets7.component';
import { AllmensshirtsComponent } from './allmensshirts/allmensshirts.component';
import { Mensshirts1Component } from './allmensshirts/mensshirts1/mensshirts1.component';
import { Mensshirts5Component } from './allmensshirts/mensshirts5/mensshirts5.component';
import { AllmensjeansComponent } from './allmensjeans/allmensjeans.component';
import { Mensjeans1Component } from './allmensjeans/mensjeans1/mensjeans1.component';
import { Mensjeans2Component } from './allmensjeans/mensjeans2/mensjeans2.component';
import { Mensjeans3Component } from './allmensjeans/mensjeans3/mensjeans3.component';
import { Mensjeans4Component } from './allmensjeans/mensjeans4/mensjeans4.component';
import { Mensjeans5Component } from './allmensjeans/mensjeans5/mensjeans5.component';
import { Mensjeans6Component } from './allmensjeans/mensjeans6/mensjeans6.component';
import { ListoneComponent } from './listone/listone.component';
import {ReactiveFormsModule } from '@angular/forms';
import { PaymentcompletepageComponent } from './components/paymentcompletepage/paymentcompletepage.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';






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
    AllmensjacketsComponent,
    Mensjackets1Component,
    Mensjackets2Component,
    Mensjackets3Component,
    Mensjackets4Component,
    Mensjackets5Component,
    Mensjackets6Component,
    Mensjackets7Component,
    AllmensshirtsComponent,
    Mensshirts1Component,
    Mensjeans1Component,
    Mensjeans2Component,
    Mensjeans3Component,
    Mensjeans4Component,
    Mensjeans5Component,
    Mensjeans6Component,

    ListoneComponent,
     PaymentcompletepageComponent
   
  

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


