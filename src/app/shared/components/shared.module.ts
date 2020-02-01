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
import { ModalSupportComponent } from './modal-support/modal-support.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeaderMenuComponent, SvgIconComponent, 
    NewsletterComponent, ModalSupportComponent, SliderComponent],
  exports: [HeaderComponent, FooterComponent, HeaderMenuComponent, 
    SvgIconComponent, NewsletterComponent, ModalSupportComponent, SliderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  //  NgbModalBackdrop
  ],
  providers: [ProductService,PaginatorService],
  entryComponents: [ModalSupportComponent]
})
export class SharedModule { }
