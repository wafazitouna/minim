import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { HomeModule } from './home/home.module';
import { ShopComponent } from './shop/shop.component';



@NgModule({
  declarations: [HomeComponent, NotFoundComponent, ShopComponent],
  exports: [HomeComponent, NotFoundComponent, ShopComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    HomeModule
  ]
})
export class PagesModule { }
