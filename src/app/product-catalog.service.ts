import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductCatalogService {
  constructor(private http: HttpClient) {}

  // calling getAllProducts api
  getAllProducts() {
    return this.http
      .post<any>('http://localhost:1230/product/getProductByLimit', {
        lower_limit: 0,
        upper_limit: 'no',
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
