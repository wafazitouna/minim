import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { PaginatorService } from 'src/app/shared/services/paginator.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {


  // array of all items to be paged
  private productList: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedProducts: any[];

 currentPage=1;
  constructor(private productService: ProductService, private paginatorService:PaginatorService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((data)=>{
      // set items to json response
      this.productList = data;

      // initialize to page 1
      this.setPage(1);
    })
  }


  setPage(page: number) {
    this.currentPage=page;

    if (this.currentPage < 1 || this.currentPage > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.paginatorService.getPager(this.productList.length, this.currentPage,12);

    // get current page of products
    this.pagedProducts = this.productList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
