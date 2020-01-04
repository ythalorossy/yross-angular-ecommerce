import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from "./product-list.component";
import { ProductListResolverService } from './product-list-resolver.service';

const routes: Routes = [
    { 
        path: '', 
        component: ProductListComponent, 
        resolve: {
            products: ProductListResolverService
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductListRoutingModule { }