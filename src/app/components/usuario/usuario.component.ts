import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { IUsuario } from '../../modelo/IUsuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: IUsuario[];
  idUsuario: number;

  constructor(public _toDoService: ToDoService) {
    this.idUsuario = -1;
    this.usuarios = this._toDoService.informacion;
  }

  CrearUsuario() {
    let idMax = this._toDoService.getUsuarios(this.idUsuario);
    let usu: IUsuario = { userId: Math.max(...idMax) + 1 };
    this._toDoService.agregarUsuarios(usu);
    // this.usuarios = this._toDoService.informacion;
  }

  ngOnInit() {
  }

}
