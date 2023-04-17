import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.models';

export const cargarUsuario = createAction('[Usuarios] Cargar Usuario',
props<{id:string}>());

export const cargarUsuarioSuccess = createAction(
    '[Usuario] Cargar Usuarios Success',
    props<{ usuario: Usuario }>()
);

export const cargarUsuarioError = createAction(
    '[Usuario] Cargar Usuarios Error',
    props<{ payload: any }>()
);

