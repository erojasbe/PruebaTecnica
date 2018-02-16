import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { IUsuario } from '../../modelo/IUsuario';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  usuarios: IUsuario[] = [];
  constructor(public _toDoService: ToDoService) {
    this.usuarios = this._toDoService.informacion;
  }

  CompletarTarea(estado: boolean, usuario: number, idTarea: number) {
    this.usuarios[usuario].nota[idTarea].completed = estado;
  }
  ActualizarTitleNota(usuario: number, idTarea: number) {
    this.usuarios[usuario].nota[idTarea].title = '';
  }

  EliminarTarea(idUsuario, idTarea) {
    this.usuarios[idUsuario].nota.splice(idTarea, 1);
  }

  ngOnInit() {
  }

}
