import { Component, OnInit } from '@angular/core';
import { MensajeroService } from './mensajero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{ 
  title = 'Organizador de Tareas';
  constructor() {
  }
}

