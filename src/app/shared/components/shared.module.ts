import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent, HeaderMenuComponent, SvgIconComponent],
  exports: [HeaderComponent, FooterComponent, HeaderMenuComponent, SvgIconComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
