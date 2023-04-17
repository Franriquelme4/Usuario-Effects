import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { Observable, of } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.models';
import { Action } from '@ngrx/store';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}

    cargarUsuarios$= createEffect(() => {
          return this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios),
            mergeMap(
                () => this.usuarioService.getUser()
                    .pipe(
                        map( (users:Usuario[]) => usuariosActions.cargarUsuariosSuccess({ usuarios:users}) ),
                        catchError( ( err:any ) => of(usuariosActions.cargarUsuariosError({ payload: err })) )
                    )
            )
        ) as Observable<Action> }
    );

}

