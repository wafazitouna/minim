import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fadeInDownOnEnterAnimation, fadeInOnEnterAnimation } from 'angular-animations';
import { interval, Subscription } from 'rxjs';
import { ModalSupportComponent } from '../modal-support/modal-support.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'slideInLeft', delay: 400 }),
    fadeInDownOnEnterAnimation({ anchor: 'fadeInLeft', delay: 400 })
  ]
})
export class SliderComponent implements OnInit, OnDestroy {

  slidePictures = [
    {
      id: 1, menuLabel: 'Home furnishings', img: './assets/img/slider/slide1.jpg',
      textLine1: 'Limited edition', textLine2: 'White Clock', numeration: '1.0'
    },
    {
      id: 2, menuLabel: 'Accessoires', img: './assets/img/slider/sofa1.png',
      textLine1: 'New Sofa', textLine2: 'New collection', numeration: '1.1'
    },
    {
      id: 3, menuLabel: 'Sports', img: './assets/img/slider/sofa2.png',
      textLine1: 'Home Deco', textLine2: 'Best Collection', numeration: '1.2'
    },
    {
      id: 4, menuLabel: 'Clothing Wear', img: './assets/img/slider/sofa3.png',
      textLine1: 'Limited edition ', textLine2: 'Classic Sofa', numeration: '1.3'
    }
  ];
  subscription: Subscription;

  constructor(private modalService: NgbModal) { }

  currentSlide = this.slidePictures[0];
  currentSlideIndex = 0;
  showSlide = true;

  ngOnInit() {

    const timer = interval(1200);


    this.subscription = timer.subscribe(_ => {
     // this.setCurrentSliderIndex();
    });
  }

  setCurrentSlider(index) {

    if (index >= 0 && index < this.slidePictures.length) {
      // console.log(index, this.slidePictures[index]);

      this.currentSlide = this.slidePictures[index];
      this.showSlide = true;
      this.currentSlideIndex = index;

    }

  }

  setCurrentSliderIndex() {

    this.showSlide = false;

    if (this.currentSlideIndex === this.slidePictures.length) {
      this.currentSlideIndex = 0;

    } else if (this.currentSlideIndex < this.slidePictures.length) {
      this.currentSlideIndex = this.currentSlideIndex + 1;
    }
    this.setCurrentSlider(this.currentSlideIndex);
  }

  openModal() {
    this.modalService.open(ModalSupportComponent,{ size: 'xl'});

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
