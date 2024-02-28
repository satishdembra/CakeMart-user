import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  // read All Cart api
  getAllCartItems() {
    const user_id: string | null = localStorage.getItem('user_id');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      user_id: user_id || '', // Use empty string if user_id is null
    });

    const options = { headers: headers };

    return this.http
      .post<any>('http://localhost:1230/cart/readAllCartItems', null, options)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  // read All Cart api
  removeFromCart(id: number) {
    const user_id: string | null = localStorage.getItem('user_id');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      user_id: user_id || '', // Use empty string if user_id is null
    });

    const options = { headers: headers };
    return this.http
      .post<any>(
        'http://localhost:1230/cart/removeFromCart',
        { product_id: id },
        options
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  //place order
  placeOrder(data: any) {
    const user_id: string | null = localStorage.getItem('user_id');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      user_id: user_id || '', // Use empty string if user_id is null
    });

    const options = { headers: headers };
    return this.http
      .post<any>('http://localhost:1230/order/placeOrder', data, options)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
