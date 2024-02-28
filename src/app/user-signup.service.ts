import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSignupService {
  constructor(private http: HttpClient) {}

  // calling sign up api
  registerUser(data: any) {
    return this.http.post<any>('http://localhost:1230/auth/signup', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
