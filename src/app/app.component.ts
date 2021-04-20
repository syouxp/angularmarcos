import { Component, OnInit } from '@angular/core';
import { AlertadorService } from './alertador.service';
import { MensajeroService } from './mensajero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 
  title = 'Mi primera app con Angular';
  escribe: string = '';
  parrafo: string = "";
  pulsado: boolean = false;
  mensaje: string = "Estoy oculto";
  tareas: string = "";
  arrayTareas: string[] = [];
  pulsadoTareas: boolean = false;
  ngOnInit () {}
  boton () {
    this.parrafo = "El botón ha sido pulsado con el valor " + this.escribe;
    this.pulsado = true;
  }
  botonTareas () {
    this.arrayTareas.push(this.tareas);
    this.pulsadoTareas = true;
    this.Mensajero.mensaje("Tarea añadida");
  }

  constructor(private Mensajero: AlertadorService) {
  }
}

