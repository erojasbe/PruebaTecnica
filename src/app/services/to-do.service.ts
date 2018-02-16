import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUsuario } from '../modelo/IUsuario';

@Injectable()
export class ToDoService {

  informacion: IUsuario[] = [];
  constructor(private http: HttpClient) {
    console.log('se hace la instacia del servicio');
    this.getInformacion();
  }

  // Se orgniza una sola posicion por usuario agregando un arreglo de notas asignadas a este para mejor control en las busquedas
  getInformacion() {
    const URLAPI = 'http://jsonplaceholder.typicode.com/todos';
    this.http.get(URLAPI).subscribe((res: any[]) => {

      const userid = Array.from(new Set(res.map(x => x.userId)));

      userid.forEach((element, index) => {
        this.informacion.push({ userId: element });
        const nota = res.filter(x => x.userId === element);

        this.informacion[index].nota = [];
        for (const item of nota) {
          this.informacion[index].nota.push({ id: item.id, title: item.title, completed: item.completed })
        }
      });
    });
  }

  getUsuarios(id: number): any[] {
    if (id !== -1) {
      return this.informacion.map(x => x.userId);
    } else {
      return this.informacion.filter(x => x.userId === id);
    }
  }

}
