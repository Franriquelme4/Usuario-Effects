import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios:Usuario[] = [];
  loading:boolean= false;
  error:any;

  constructor(private store:Store<AppState>){}
  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({users,loading,error})=>{
      this.loading = loading;
      this.usuarios=users;
      this.error=error;
    })
    this.store.dispatch(cargarUsuarios());
    // this.service.getUser().subscribe((data:any)=>{
    //   this.usuarios = data['data'];
    //   console.log(data);
    // })
  }

}
