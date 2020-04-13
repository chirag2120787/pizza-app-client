import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  @Input() menuItem;
  @Input() addToCartEvent;
  showAlert = false;

  constructor(private cartService: CartService) { }

  ngOnInit() { }

  addToCart(item) {
    this.cartService.addToCart.emit(item);
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 1000);
  }

}
