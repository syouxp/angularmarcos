import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertadorService {
  mensaje(texto: string){
    alert(texto);
  }
  constructor() { }
}
