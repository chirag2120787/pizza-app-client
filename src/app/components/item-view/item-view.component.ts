import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  @Input() menuItem;
  @Input() addToCartEvent;
  showAlert = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.menuItem)
  }

  private addToCart(item){
    this.snackBar.open(`Item ${item.itemName} is added to the cart!`)
    console.log(item)
  }

}
