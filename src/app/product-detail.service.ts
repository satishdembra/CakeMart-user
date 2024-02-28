import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  constructor(private http: HttpClient) {}

  // api call to product by Id
  findByMenuId(id: number): Observable<any> {
    console.log('----------------------------  ' + id);
    return this.http.get<any>(
      `http://localhost:1230/product/readAProduct/${id}`
    );
  }

  // calling getAllProducts api
  readOthersComment(id: number) {
    return this.http
      .post<any>('http://localhost:1230/product/readOthersComment', {
        product_id: id,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  // calling addToCart api
  addToCart(data: any) {
    const user_id: string | null = localStorage.getItem('user_id');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      user_id: user_id || '', // Use empty string if user_id is null
    });

    const options = { headers: headers };

    return this.http
      .post<any>('http://localhost:1230/cart/addProduct', data, options)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  // calling giveStar api
  giveCombinedReviewRating(data: any) {
    const user_id: string | null = localStorage.getItem('user_id');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      user_id: user_id || '', // Use empty string if user_id is null
    });

    const options = { headers: headers };

    return this.http
      .post<any>(
        'http://localhost:1230/product/addReviewRatingCombined',
        data,
        options
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  // calling add Review api
  addReview(data: any) {
    const user_id: string | null = localStorage.getItem('user_id');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      user_id: user_id || '', // Use empty string if user_id is null
    });

    const options = { headers: headers };

    return this.http
      .post<any>('http://localhost:1230/product/addComment', data, options)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
