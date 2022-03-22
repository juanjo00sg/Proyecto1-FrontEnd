import { Component, OnInit } from '@angular/core';
import { RemotoService } from 'src/app/remoto.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public datos = [];

  constructor() { }
  //private informacionWeb:RemotoService

  ngOnInit(): void {
  }

  public consumir(){

    //this.informacionWeb.getDatos().subscribe(data=>{this.datos=data});
    
  }
}
