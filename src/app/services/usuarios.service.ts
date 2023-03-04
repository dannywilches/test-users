import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiCountries: string = 'https://restcountries.com/v3.1/region/americas';
  apiUsers: string= 'http://127.0.0.1/api/';

  constructor(private http:HttpClient) { }

  listCountriesService(){
    return this.http.get(this.apiCountries);
  }
}
