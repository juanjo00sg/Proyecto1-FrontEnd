import {RouterModule,Route} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RemotoService } from './remoto.service';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosModule } from './carros/carros.module';
import { FormularioDatosComponent } from './formulario-datos/formulario-datos.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormularioDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CarrosModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RemotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
