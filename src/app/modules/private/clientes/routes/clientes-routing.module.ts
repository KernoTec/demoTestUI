import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainVehiculosComponent} from '../views/main-vehiculos/main-vehiculos.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';

const vehiculosRoutes: Routes = [
  {
    path: '',
    component: MainVehiculosComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
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
  declarations: [],
  imports: [
    RouterModule.forChild(vehiculosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CountriesRoutingModule {
}
