import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ShippingComponent } from './shipping/shipping.component';

import { CartService } from "./_services/cart.service";

import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule,
    AuthModule,
    RouterModule.forRoot([
      { path: "", loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule) },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
      { path: 'shipping', component: ShippingComponent },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductDetailsComponent,
    ShippingComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
