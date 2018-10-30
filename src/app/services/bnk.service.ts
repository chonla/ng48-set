import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../models/feed';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  get(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api.baseUrl}/bnk/members`);
  }

  instragram(id: string): Observable<Feed> {
    return this.http.get<Feed>(`https://www.api.bnk48.com/api/social-feeds?page=1&max=1000000000000000&limit=19&username=${id}`)
  }

  create(data: Member): Observable<any> {
    return this.http.post(`${environment.api.baseUrl}/bnk/members`, data);
  }

  member(id: string): Observable<Member> {
    return this.http.get<Member>(`${environment.api.baseUrl}/bnk/members/${id}`);
  }

  update(data: Member): Observable<any> {
    const id = data._id;
    return this.http.put(`${environment.api.baseUrl}/bnk/members/${id}`, data);
  }
}
