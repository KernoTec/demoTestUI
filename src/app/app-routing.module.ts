import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './pages/vehicles/vehicles.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AsignacionesComponent } from './pages/asignaciones/asignaciones.component';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { VehiclesDetailComponent } from './pages/vehicles-detail/vehicles-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'veihiculos', pathMatch: 'full' },
  {path: 'vehiculos', component: VehiculosComponent},
  {path: 'vehiculos/:vehiculoId', component: VehiclesDetailComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/:clienteId', component: ClientDetailComponent},
  {path:'asignaciones', component: AsignacionesComponent},
  {path:'**', redirectTo: '/vehiculos', pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }