import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { CartRoutingModule } from "./cart-routing.module";
import { CartComponent } from './cart.component';

@NgModule({
    declarations: [CartComponent],
    imports: [
        CommonModule, 
        CartRoutingModule,
        ReactiveFormsModule
    ]
})
export class CartModule { }