import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  cartItems;
  cartItemsCount: number;
  cartTotal: any;

  constructor(private cartService: CartService, private location: Location, private router: Router) { }

  ngOnInit() {

    this.cartService.emitCartData.subscribe((cartData) => {
      this.cartItems = cartData;
      this.updateCartInfo(cartData);
    });
  }

  updateCartInfo(cartData) {
    this.cartItemsCount = cartData.length;
    this.cartTotal = this.cartService.cartTotal.toFixed(2).toString().replace('.', ',');
  }

  navigateToCart() {
    this.router.navigateByUrl('/cart', { skipLocationChange: true });
    this.location.replaceState('/cart');
  }

  navigateToMenu() {
    this.router.navigateByUrl('menu', { skipLocationChange: true });
    this.location.replaceState('menu');
  }

  navigateToHome() {
    this.router.navigateByUrl('', { skipLocationChange: true });
    this.location.replaceState('');
  }

}
