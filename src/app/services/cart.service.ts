import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    cartData: { menuItem: any, quantity: number }[] = [];
    @Output() emitCartData = new EventEmitter();
    @Output() addToCart = new EventEmitter();
    @Output() removeFromCart = new EventEmitter();
    @Output() reloadApp = new EventEmitter();
    cartTotal;

    constructor() {

        this.addToCart.subscribe(itemToAdd => {
            this.addItemToCart(itemToAdd);
        });

        this.removeFromCart.subscribe(itemToRemove => {
            this.removeItemFromCart(itemToRemove)
        });

        this.emitCartData.subscribe(cartData => {
            this.updateCartInfo(cartData);
        })

    }

    addItemToCart(itemToAdd) {
        let isNewItem;
        if (this.cartData.length !== 0) {
            this.cartData.some(cartItem => {
                if (cartItem.menuItem.id === itemToAdd.id) {
                    cartItem.quantity = cartItem.quantity + 1;
                    isNewItem = false;
                    return true;
                } else {
                    isNewItem = true;
                }
            });
        }
        if (this.cartData.length === 0 || isNewItem) {
            this.cartData.push({
                menuItem: itemToAdd,
                quantity: 1
            })
        }
        this.updateCartInfo(this.cartData);
        this.emitCartData.emit(this.cartData);
    }

    removeItemFromCart(itemToRemove) {
        let indexToRemove;
        this.cartData.some((cartItem, index) => {
            if (cartItem.menuItem.id === itemToRemove) {
                indexToRemove = index;
                return;
            }
        })
        this.cartData = this.cartData.splice(indexToRemove, 1);
        this.emitCartData.emit(this.cartData);
    }


    updateCartInfo(cartData) {
        let cartTotal = 0;
        cartData.forEach(cartItem => {
            const eachItemPrice = cartItem.menuItem.itemPrice.replace(',', '.');
            // tslint:disable-next-line: radix
            cartTotal = cartTotal + (parseFloat(eachItemPrice) * cartItem.quantity);
        });
        this.cartTotal = cartTotal;
    }

}
