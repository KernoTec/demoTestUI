import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainClientesComponent} from './views/main-clientes/main-clientes.component';
import {ClientesDashboardComponent} from './components/clientes-dashboard/clientes-dashboard.component';
import {ClientesRoutingModule} from "./routes/clientes-routing.module";

@NgModule({
  declarations: [
    MainClientesComponent,
    ClientesDashboardComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule {
}
