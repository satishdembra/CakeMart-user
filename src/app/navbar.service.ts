import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(private http: HttpClient) {}

  //cart count
  getCartItemsCount() {
    console.log('arha h +++++++++++++++++++++++++++++++');
    const user_id: string | null = localStorage.getItem('user_id');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      user_id: user_id || '', // Use empty string if user_id is null
    });

    const options = { headers: headers };
    return this.http
      .post<any>('http://localhost:1230/cart/qty', null, options)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
