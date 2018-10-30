import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credential } from '../models/credential';
import { AccessToken } from '../models/access-token';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) {
    this.token = '';
  }

  login(credential: Credential): Observable<AccessToken> {
    return this.http.post<AccessToken>(`${environment.api.baseUrl}/auth/login`, credential);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isLogin(): boolean {
    return (this.token !== '');
  }
}
