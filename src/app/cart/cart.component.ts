import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { Observable } from 'rxjs';

import { CartService } from "../_services/cart.service";
import { CanComponentDeactivate } from '../_helpers/can-deactivate.guard';
import { DialogService } from '../_services/dialog.service';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit, CanComponentDeactivate {

  canDeactivate() : Observable<boolean> | boolean {

    if (!this.checkoutForm 
          || this.checkoutForm.controls.name.value === '' 
          || this.checkoutForm.controls.address.value === '') {
      return true;
    }

    return this.dialogService.confirm('Discard changes? (name, email)');
  }
  
  items: any[];
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    public dialogService: DialogService,
    private formBuilder: FormBuilder
  ) {

    this.checkoutForm  = this.formBuilder.group({
      name: '',
      address: ''
    });

  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {

    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
