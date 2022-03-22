import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ihttp } from './interfaz';

@Injectable({
  providedIn: 'root'
})
export class RemotoService {

  constructor(private datos: HttpClient) { }

  public getDatos(ced, nom) {

    //return this.datos.get<Ihttp[]>(('https://jsonplaceholder.typicode.com/posts'))
    console.log(ced, nom)
    return this.datos.post('http://127.0.0.1:1337/usuarios', { cedU: ced, nomU: nom });
    
   }
}
