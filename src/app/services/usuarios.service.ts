import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Usuario } from '../lista-usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiCountries: string = 'https://restcountries.com/v3.1/region/americas';
  private apiBackend: string= 'http://127.0.0.1:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  listCountriesService(){
    return this.http.get(this.apiCountries);
  }

  listCategoryService(){
    return this.http.get(this.apiBackend + "/categorias/all");
  }

  registrarUsuario(user:any) {
    return this.http.post(this.apiBackend + "/usuarios/new", JSON.stringify(user), this.httpOptions);
  }

  editarUsuario(user:any, id_user:any) {
    console.log(id_user);
    return this.http.put(this.apiBackend + "/usuarios/update/" + id_user , JSON.stringify(user), this.httpOptions);
  }

  eliminarUsuario(id_user:any) {
    return this.http.delete(this.apiBackend + "/usuarios/delete/" + id_user);
  }

  listaUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiBackend + "/usuarios/all");
  }

  infoUsuario(id_user: number): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiBackend + "/usuarios/show/" + id_user);
  }
}
