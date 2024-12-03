import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainClientesComponent} from './views/main-clientes/main-clientes.component';
import {ClientesDashboardComponent} from './components/clientes-dashboard/clientes-dashboard.component';
import {ClientesRoutingModule} from "./routes/clientes-routing.module";
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';
import { ClienteAsignacionComponent } from './components/cliente-asignacion/cliente-asignacion.component';

@NgModule({
  declarations: [
    MainClientesComponent,
    ClientesDashboardComponent,
    ClienteDetailsComponent,
    ClienteAsignacionComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule {
}
