import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient ) { }

  getHomePageDetails(partnerName: string):Observable<any>{
    return this.http.get<any>(environment.apiBaseUrl+ environment.userLogin+partnerName);
  }

}
