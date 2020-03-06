import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  protected get<T = any>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  protected getRaw<T = any>(url: string): Observable<HttpResponse<T>> {
    return this.http.get<T>(url, {observe: 'response'})
  }
}
