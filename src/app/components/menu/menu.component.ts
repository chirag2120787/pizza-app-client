import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
const menuItems = require('../../../assets/menu.json');

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  appMenu: any;
  @Output() addToCartEvent: EventEmitter;
  numberOfPages;
  currentPage = 0;
  previousButton: boolean;
  nextButton: boolean;
  pageChangeEmitter: EventEmitter;

  constructor() { }

  ngOnInit() {
    this.numberOfPages = Math.ceil(menuItems.length / 8);
    this.numberOfPages = Array(this.numberOfPages);
    this.nextButton = true;
    this.previousButton = false;
    this.appMenu = menuItems.slice(this.currentPage, this.currentPage * 8 + 8)

  }

  goTo(pageNumber) {
    this.currentPage = pageNumber;
    if (pageNumber + 1 !== this.numberOfPages.length) {
      if (pageNumber !== 0) {
        this.nextButton = true;
        this.previousButton = true;
      } else {
        this.nextButton = true;
        this.previousButton = false;
      }
    } else {
      this.nextButton = false;
      this.previousButton = true;
    }
    this.appMenu = menuItems.slice(this.currentPage * 8, this.currentPage * 8 + 8)
  }

  goToNext() {
    this.currentPage = this.currentPage + 1;
    this.goTo(this.currentPage)
  }

  goToPrevious() {
    this.currentPage = this.currentPage - 1;
    this.goTo(this.currentPage)
  }

}
