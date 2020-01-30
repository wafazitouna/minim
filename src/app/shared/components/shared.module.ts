import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RouterModule } from '@angular/router';
import { PaginatorService } from '../services/paginator.service';
import { ProductService } from '../services/product.service';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeaderMenuComponent, SvgIconComponent, NewsletterComponent],
  exports: [HeaderComponent, FooterComponent, HeaderMenuComponent, SvgIconComponent, NewsletterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ProductService,PaginatorService]
})
export class SharedModule { }
