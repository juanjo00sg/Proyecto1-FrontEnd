import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ihttp } from './interfaz';

@Injectable({
  providedIn: 'root'
})
export class RemotoService {

  constructor(private datos: HttpClient) { }

  public getDatos(marca, placa, color) {

    //return this.datos.get<Ihttp[]>(('https://jsonplaceholder.typicode.com/posts'))    
    return this.datos.post('http://127.0.0.1:1337/carros', {  placa: placa, marca: marca ,color: color});
    
   }
}
