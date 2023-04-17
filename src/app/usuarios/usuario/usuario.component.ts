import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario:Usuario | null =null;
  loading:boolean = false;
  error:any;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) {


  }
  ngOnInit(): void {
this.store.select('usuario').subscribe(({users,loading,error})=>{
  this.usuario = users;
  this.error = error;
  this.loading = loading;
})

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch( cargarUsuario( { id }) )
    })
  }

}
