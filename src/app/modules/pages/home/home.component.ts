import { Component, OnInit } from '@angular/core';
import { products } from './../../../data/products';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList = products;
  constructor() { }

  ngOnInit() {
  }

}
