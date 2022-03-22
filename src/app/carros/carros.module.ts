import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const rutasU:Route[]=[
  {path: 'createcarros', component:CreateComponent, outlet:'info'},
  {path: 'readcarros', component:ReadComponent, outlet:'info'},
  {path: 'updatecarros', component:UpdateComponent, outlet:'info'},
  {path: 'deletecarros', component:DeleteComponent, outlet:'info'}
]



@NgModule({
  declarations: [CreateComponent, UpdateComponent, DeleteComponent, ReadComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutasU)
  ]
})
export class CarrosModule { }
