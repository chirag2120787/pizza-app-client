import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private location: Location, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.reloadApp.subscribe(data => this.reloadApp());
  }

  reloadApp() {
    document.location.reload();
  }

  navigateToMenu() {
    this.router.navigateByUrl('menu', { skipLocationChange: true });
    this.location.replaceState('menu');
  }

}
