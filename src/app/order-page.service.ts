import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderPageService {
  constructor(private http: HttpClient) {}

  // get orders
  getOrders() {
    const user_id: string | null = localStorage.getItem('user_id');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      user_id: user_id || '', // Use empty string if user_id is null
    });

    const options = { headers: headers };
    return this.http
      .post<any>('http://localhost:1230/order/getOrderByCustId', null, options)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
