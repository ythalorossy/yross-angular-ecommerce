import { Injectable } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Product } from '../_models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolverService implements Resolve<Array<Product>>{
  
  constructor(private productService: ProductService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Product[]> {
    return this.productService.getProducts();
  }
}
