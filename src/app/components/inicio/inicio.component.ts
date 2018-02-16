import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public _toDoService: ToDoService) {
  }

  ngOnInit() {
  }

}
