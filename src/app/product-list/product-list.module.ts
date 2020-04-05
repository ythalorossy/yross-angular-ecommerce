import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from "./product-list-routing.module";
import { ProductListComponent } from './product-list.component';

import { ProductAlertsComponent } from "../product-alerts/product-alerts.component";

@NgModule({
    declarations: [
        ProductAlertsComponent,
        ProductListComponent],
    imports: [
        CommonModule,
        ProductListRoutingModule
    ]
})
export class ProductListModule { }