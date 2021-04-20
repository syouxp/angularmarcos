import { Component, OnInit } from '@angular/core';
import { MensajeroService } from '../mensajero.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  tareas: string = "";
  arrayTareas: string[] = [];
  botonMover (tarea: string) {
    this.arrayTareas.push(tarea);
    this.arrayTareas.shift();
    this.Mensajero.mensaje("Tarea movida");
  }
  botonTareas () {
    this.arrayTareas.push(this.tareas);
    this.Mensajero.mensaje("Tarea añadida");
  }
  botonUrgente () {
    this.arrayTareas.unshift(this.tareas);
    this.Mensajero.mensaje("Tarea urgente añadida");
  }
  botonBorrado () {
    this.arrayTareas.shift();
    this.Mensajero.mensaje("Tarea borrada");
  }

  constructor(private Mensajero: MensajeroService) { }

  ngOnInit(): void {
  }

}
