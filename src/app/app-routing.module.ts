import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './componentes/clientes/cliente-list/cliente-list.component';
import { VehiculoListComponent } from './componentes/vehiculos/vehiculo-list/vehiculo-list.component';
import { ClienteNewComponent } from './componentes/clientes/cliente-new/cliente-new.component';
import { VehiculoNewComponent } from './componentes/vehiculos/vehiculo-new/vehiculo-new.component';


const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/new', component: ClienteNewComponent },
  { path: 'vehiculos', component: VehiculoListComponent },
  { path: 'vehiculos/new', component: VehiculoNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }