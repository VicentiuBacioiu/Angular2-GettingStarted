import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './common/star.component';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
    { path: '', component: WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent }
  ])],
  declarations: [AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, WelcomeComponent, ProductDetailComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }