import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SliderComponent } from './slider/slider.component';

@NgModule({
    declarations: [SliderComponent],
    exports: [SliderComponent],
    imports: [
      CommonModule,

    ]
  })
export class HomeModule { }
