import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private url = 'https://randomuser.me/api';
  
  constructor(private http: HttpClient) { }
  
  getInfo(): Observable<any> {
    return this.http.get(this.url);
  }
  }