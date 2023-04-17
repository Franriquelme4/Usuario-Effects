import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Response } from '../models/response.models';
import { Usuario } from '../models/usuario.models';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlBase: string = "https://reqres.in";
  constructor(private http: HttpClient) { }
  getUser():any {
    return this.http.get<Response>(`${this.urlBase}/api/users?delay=3`).pipe(
      map(response=>response.data)
    )
  }

  getUserById(id:string):any {
    return this.http.get<Response>(`${this.urlBase}/api/users/${id}`).pipe(
      map(response=>response.data)
    )
  }
}
