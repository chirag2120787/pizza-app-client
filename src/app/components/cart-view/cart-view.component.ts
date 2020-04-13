import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/services/server.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  invalidEmail = false;
  invalidUserName = false;
  invalidPhone = false;

  constructor(private cartService: CartService,
    private location: Location, private router: Router,
    private serverService: ServerService,
    private spinnerService: NgxSpinnerService) { }

  cartData;
  cartTotal;
  deliveryCharge = 3.25;
  user = { name: '', email: '', phone: '', address: '' };

  ngOnInit() {
    this.updateCartData(this.cartService.cartData)
    this.cartService.emitCartData.subscribe(cartData => {
      this.updateCartData(cartData);
    });
  }

  updateCartData(cartData) {

    if (cartData.length === 0) {
      window.location.replace('');
      this.cartService.reloadApp.emit('true');
    }

    this.cartData = cartData;
    this.cartTotal = (this.cartService.cartTotal + this.deliveryCharge).toFixed(2).toString().replace('.', ',');
  }

  removeItem(itemId) {
    this.cartData = this.cartData.filter(cartItem => {
      return cartItem.menuItem.id !== itemId;
    })
    this.cartService.emitCartData.emit(this.cartData);
  }

  navigateToMenu() {
    this.router.navigateByUrl('menu', { skipLocationChange: true });
    this.location.replaceState('menu');
  }

  updateName(name) {
    this.user.name = name;
  }

  updateEmail(email) {
    this.user.email = email;
  }

  updatePhone(phone) {
    this.user.phone = phone;
  }

  updateAddress(address) {
    this.user.address = address;
  }

  validateForm() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameRegex = RegExp('^[a-zA-Z\x7f-\xff]+(([\',. -][a-zA-Z \x7f-\xff])?[a-zA-Z]*)*$');
    const phoneRegex = RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
    if (this.user.email === '' || !emailRegex.test(this.user.email)) {
      this.invalidEmail = true;
      return false;
    } else { this.invalidEmail = false; }
    if (this.user.name === '' || !nameRegex.test(this.user.name)) {
      this.invalidUserName = true;
      return false;
    } else { this.invalidUserName = false; }
    if (this.user.phone === '' || !phoneRegex.test(this.user.phone)) {
      this.invalidPhone = true;
      return false;
    } else { this.invalidPhone = false; }
    return true;
  }

  onCompleteOrder() {
    if (this.validateForm()) {
      this.spinnerService.show();
      this.serverService.createOrder({
        cartData: this.cartData,
        cartTotal: this.cartTotal,
        userDetails: this.user
      }).subscribe((orderCreateResponse) => {
        this.spinnerService.hide();
        alert('Please check your email for the order details.');
        window.location.replace('');
        this.cartService.reloadApp.emit('true');
      });
    }
  }

}
