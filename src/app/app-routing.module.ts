import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { HomeComponent } from './components/home/home.component';


// const routes: Routes = [{ path: '', pathMatch: 'full', component: , canActivate: [] },];
const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'menu', pathMatch: 'full', component: MenuComponent },
  { path: 'cart', pathMatch: 'full', component: CartViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
