import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios:Usuario[] = [];

  constructor(private service:UsuarioService){}
  ngOnInit(): void {
    this.service.getUser().subscribe((data:any)=>{
      this.usuarios = data['data'];
      console.log(data);
    })
  }

}
