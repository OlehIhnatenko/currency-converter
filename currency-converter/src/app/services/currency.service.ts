import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/currencies?api_key=${environment.apiKey}`)
      .pipe(
        map(response => response.response)
      );
  }
}
