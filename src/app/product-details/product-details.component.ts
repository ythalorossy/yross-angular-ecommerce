import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CartService } from "../_services/cart.service";
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/product';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(+params.get("productId"))
      this.productService
        .getProductById(+params.get("productId"))
          .subscribe(p => {
            console.log(p); 
            this.product = p
          });
    });
  }

  addToCart(product) {
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
  }
}
