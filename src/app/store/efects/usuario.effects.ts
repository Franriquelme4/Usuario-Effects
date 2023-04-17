import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { Observable, of } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.models';
import { Action } from '@ngrx/store';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}

    cargarUsuario$= createEffect(() => {
          return this.actions$.pipe(
            ofType( usuariosActions.cargarUsuario),
            mergeMap(
                ({id}) => this.usuarioService.getUserById(id)
                    .pipe(
                        map( (users:Usuario) => usuariosActions.cargarUsuarioSuccess({ usuario:users}) ),
                        catchError( ( err:any ) => of(usuariosActions.cargarUsuarioError({ payload: err })) )
                    )
            )
        ) as Observable<Action> }
    );

}

