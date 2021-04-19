import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 
  title = 'Mi primera app con Angular';
  escribe = '';
  parrafo = "";
  ngOnInit () {}
  boton () {
    this.parrafo = "El botón ha sido pulsado con el valor " + this.escribe;
  }
}

