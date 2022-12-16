import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data, IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private http_options = {};

  constructor(private httpclinet: HttpClient) {
    this.http_options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })

    };

  }

  getAllProduct(): Observable<Data> {
    return this.httpclinet.get<Data>(`${environment.APIBaseURL}/Product/Get`);
  }

  getProductById(pid: number): Observable<Data> {
    return this.httpclinet.get<Data>(`${environment.APIBaseURL}/Product/Get/${pid}`);
  }
  getProductOffer(price: number): Observable<Data> {
    return this.httpclinet.get<Data>(`${environment.APIBaseURL}/Product/getProductOffer?num=${price}`);
  }
  getProductBestSeller(quantity: number): Observable<Data> {
    return this.httpclinet.get<Data>(`${environment.APIBaseURL}/Product/getProductBestSeller?num=${quantity}`);
  }
}
