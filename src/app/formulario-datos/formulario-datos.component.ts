import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RemotoService } from '../remoto.service';

@Component({
  selector: 'app-formulario-datos',
  templateUrl: './formulario-datos.component.html',
  styleUrls: ['./formulario-datos.component.css']
})
export class FormularioDatosComponent implements OnInit {

  nombre = "";
  cedula = "";
  checkoutForm;
  constructor(private formBuilder: FormBuilder,private informacionWeb:RemotoService ) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      cedula: ''
    });
  }

  ngOnInit(): void {
  }
  public getData() {
    
    this.nombre = this.checkoutForm.value.nombre;
    this.cedula = this.checkoutForm.value.cedula;
    console.log(this.nombre, this.cedula)
    this.informacionWeb.getDatos(this.cedula, this.nombre).subscribe(data=>{alert(data)});
  }
}
