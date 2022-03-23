import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RemotoService } from '../remoto.service';

@Component({
  selector: 'app-formulario-datos',
  templateUrl: './formulario-datos.component.html',
  styleUrls: ['./formulario-datos.component.css']
})
export class FormularioDatosComponent implements OnInit {

  marca = "";
  placa = "";
  color = "";
  checkoutForm;
  constructor(private formBuilder: FormBuilder,private informacionWeb:RemotoService ) { 
    this.checkoutForm = this.formBuilder.group({
      marca: '',
      placa: '',
      color: ''
    });
  }

  ngOnInit(): void {
  }
  public getData() {
    
    this.placa = this.checkoutForm.value.placa;
    this.marca = this.checkoutForm.value.marca;
    this.color = this.checkoutForm.value.color;
    console.log(this.placa, this.marca, this.color)
    this.informacionWeb.getDatos(this.placa, this.marca, this.color).subscribe(data=>{alert(data)});
  }
}
