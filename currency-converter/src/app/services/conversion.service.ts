import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor(private http: HttpClient) { }

  convert(from: string, to: string, amount: number): Observable<any> {
    const params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('from', from)
      .set('to', to)
      .set('amount', amount.toString());

    const url = `${environment.apiUrl}/convert`;
    return this.http.get(url, { params });
  }
}
