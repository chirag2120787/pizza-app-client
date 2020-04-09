import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { ItemViewComponent } from './item-view/item-view.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [BrowserModule, MatSelectModule],
    exports: [ItemViewComponent, MenuComponent, HeaderComponent, FooterComponent],
    declarations: [ItemViewComponent, MenuComponent, HeaderComponent, FooterComponent]
})
export class ComponentsModule { }
