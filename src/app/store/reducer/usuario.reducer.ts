import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess} from '../actions';
import { Usuario } from 'src/app/models/usuario.models';

export interface UsuarioState {
  id:string,
  users: Usuario | null,
  loaded: boolean,
  loading: boolean,
  error: any
}

export const usuarioInitialState: UsuarioState = {
  id:'',
  users: null,
  loaded: false,
  loading: false,
  error: null
};

export const usuarioReducer = createReducer(usuarioInitialState,

  on( cargarUsuario, (state,{id}) => ({ ...state, loading: true ,id:id})),


  on( cargarUsuarioSuccess, (state, { usuario }) => ({
      ...state,
      loading: false,
      loaded: true,
      users: {...usuario}
  })),

  on( cargarUsuarioError, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: {
          url: payload.url,
          name: payload.name,
          message: payload.message
      }
  })),




);
