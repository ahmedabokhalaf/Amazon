import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private httpOptions={};
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
  }
  public saveUser(user: IUser): Observable<any> {
    return this.httpClient.post<any>(`${environment.APIBaseURL}/User`, user);
  }
  /* addNewUser(user:IUser):Observable<IUser>{
    return this.httpClient.post<IUser>(`${environment.APIBaseURL}/User`,JSON.stringify(user),this.httpOptions)
  } */
}
