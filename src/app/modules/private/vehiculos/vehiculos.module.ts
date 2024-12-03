import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainVehiculosComponent} from './views/main-vehiculos/main-vehiculos.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CountriesRoutingModule} from './routes/vehiculos-routing.module';
import {ModalComponent} from "../../../shared/modal/modal.component";

@NgModule({
  declarations: [
    MainVehiculosComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ModalComponent
  ]
})
export class VehiculosModule {
}
