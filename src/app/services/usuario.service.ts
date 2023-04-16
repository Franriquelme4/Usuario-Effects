import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlBase: string = "https://reqres.in";
  constructor(private http: HttpClient) { }
  getUser() {
    return this.http.get(`${this.urlBase}/api/users`);
  }
}
