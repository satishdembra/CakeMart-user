import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSigninService {
  constructor(private http: HttpClient) {}

  // calling sign in api
  loginUser(data: any) {
    return this.http.post<any>('http://localhost:1230/auth/signin', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
