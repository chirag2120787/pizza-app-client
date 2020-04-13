import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { ItemViewComponent } from './item-view/item-view.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
    imports: [BrowserModule, MatSelectModule, NgxSpinnerModule],
    exports: [ItemViewComponent, MenuComponent, HeaderComponent, FooterComponent],
    declarations: [ItemViewComponent, MenuComponent, HeaderComponent, FooterComponent, CartViewComponent, HomeComponent]
})
export class ComponentsModule { }
