import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor() { }
  usuario = "";
  arrayUsuario: string[] = []
  crearUsuario () {
    this.arrayUsuario.push(this.usuario);
  }
  ngOnInit(): void {
  }

}
