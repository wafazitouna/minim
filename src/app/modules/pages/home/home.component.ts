import { Component, OnInit } from '@angular/core';
import { PaginatorService } from 'src/app/shared/services/paginator.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // array of all items to be paged
  private productList: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedProducts: any[];

  constructor(private productService: ProductService, private paginatorService: PaginatorService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      // set items to json response
      this.productList = data;
      // initialize to page 1
      this.setPage(1);

    })
  }


  setPage(page: number) {

    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.paginatorService.getPager(this.productList.length, page, 8);

    // get current page of products
    this.pagedProducts = this.productList.slice(this.pager.startIndex, this.pager.endIndex + 1);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }



}
