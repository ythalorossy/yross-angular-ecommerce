import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/product';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

  products;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe( data => {
      this.products = data.products
    });
  }

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
