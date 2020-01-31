import { Component, OnInit } from '@angular/core';
import { ModalSupportComponent } from '../modal-support/modal-support.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slidePictures=[
    { id: 1, menuLabel:"Home furnishings", img: "./../../../../../assets/img/slider/slide1.jpg", textLine1: "Limited edition", textLine2:"White Clock",numeration:"1.0"},
    { id: 2, menuLabel: "Accessoires",img: "./../../../../../assets/img/slider/slide1.jpg", textLine1: "Limited edition", textLine2: "White Clock", numeration: "1.1" },
    { id: 3, menuLabel: "Sports",img: "./../../../../../assets/img/slider/slide1.jpg", textLine1: "Limited edition", textLine2: "White Clock", numeration: "1.2" },
    { id: 4, menuLabel: "Clothing Wear",img: "./../../../../../assets/img/slider/slide1.jpg", textLine1: "Limited edition", textLine2: "White Clock4", numeration: "1.3" }
  ]
  constructor(private modalService: NgbModal) { }

  currentSlide = this.slidePictures[0]
  ngOnInit() {
  }

  setCurrentSlider(index){
    this.currentSlide = this.slidePictures[index];
    console.log(this.currentSlide);
  }

  openModal() {
     this.modalService.open(ModalSupportComponent);

  }
  
}
