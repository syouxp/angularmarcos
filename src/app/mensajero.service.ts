import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeroService {
  mensaje(texto: string){
    console.log(texto);
  }
  constructor() { }
}
