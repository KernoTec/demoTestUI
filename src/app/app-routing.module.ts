import { VehiculoComponent } from './componentes/vehiculo/vehiculo.component';
import { AsignacionComponent } from './componentes/asignacion/asignacion.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './componentes/forms/cliente-form/cliente-form.component';
import { VehiculoFormComponent } from './componentes/forms/vehiculo-form/vehiculo-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'Clientes', component:ClienteComponent },
  { path: 'Vehiculos', component:VehiculoComponent },
  { path: 'Asignaciones', component:AsignacionComponent },
  { path: 'ClienteForm', component:ClienteFormComponent },
  { path: 'ClienteForm/:id', component:ClienteFormComponent },
  { path: 'VehiculoForm', component:VehiculoFormComponent },
  { path: 'VehiculoForm/:id', component:VehiculoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }