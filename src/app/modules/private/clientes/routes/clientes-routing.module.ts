import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainClientesComponent} from "../views/main-clientes/main-clientes.component";
import {ClientesDashboardComponent} from "../components/clientes-dashboard/clientes-dashboard.component";
import {ClienteDetailsComponent} from "../components/cliente-details/cliente-details.component";

const vehiculosRoutes: Routes = [
  {
    path: '',
    component: MainClientesComponent,
    children: [
      {
        path: 'dashboard',
        component: ClientesDashboardComponent
      },
      {
        path: 'dashboard/:id',
        component: ClienteDetailsComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(vehiculosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClientesRoutingModule {
}
