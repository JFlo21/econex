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
import { ListoneComponent } from './listone/listone.component';
import {ReactiveFormsModule } from '@angular/forms';





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
    ListoneComponent
   
  

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
