import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
const menuItems = require('../../../assets/menu.json');

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  appMenu: any;
  @Output() addToCartEvent: EventEmitter;

constructor() { }

ngOnInit() {
    this.appMenu = menuItems;
  }

}
