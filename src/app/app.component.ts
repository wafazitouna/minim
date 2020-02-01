import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ])
  ]
})
export class AppComponent implements OnInit {
  title = 'minim';


  constructor(@Inject(DOCUMENT) document) { }


  ngOnInit() {
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 10, // offset (in px) from the original trigger point
      delay: 400, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      const element = document.getElementById('minim-header');
      element.classList.add('sticky');
    } else {
      const element = document.getElementById('minim-header');
      element.classList.remove('sticky');
    }
  }
}
