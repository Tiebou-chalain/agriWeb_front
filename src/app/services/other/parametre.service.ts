import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ParametreService {

  rootURL = `${environment.apiParametre}parametre/`;
  constructor(private http: HttpClient) {}

  create(data: any): Observable<any>{
    return this.http.post<any>(`${this.rootURL}save`, data);
  }


  all(): Observable<any> {
    return this.http.get(`${this.rootURL}`);
  }

  getParametre(): Observable<any> {
    return this.http.get<any>(`${this.rootURL}get`);
  }


}
