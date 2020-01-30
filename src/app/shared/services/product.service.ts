import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * @returns product List
   * @memberof ProductService
   */
  getAll(){
    return this.http.get<any>('./../../../assets/data/products.json');
  }


}
