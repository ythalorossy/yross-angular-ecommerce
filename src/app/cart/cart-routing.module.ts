import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CartComponent } from "./cart.component";
import { CanDeactivateGuard } from '../_helpers/can-deactivate.guard';

const routes: Routes = [{ 
        path: '', 
        component: CartComponent, 
        canDeactivate: [CanDeactivateGuard] 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule { }