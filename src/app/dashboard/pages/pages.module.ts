import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DashboardRoutingModule } from '../dashboard-routing.module';
import { ShowCustomerComponent } from './customers/show-customer/show-customer.component';
import { CreateEditCustomerComponent } from './customers/create-edit-customer/create-edit-customer.component';
import { ShowVehiclesComponent } from './vehicles/show-vehicles/show-vehicles.component';
import { CreateEditVehiclesComponent } from './vehicles/create-edit-vehicles/create-edit-vehicles.component';



@NgModule({
  declarations: [
    ShowCustomerComponent,
    CreateEditCustomerComponent,
    ShowVehiclesComponent,
    CreateEditVehiclesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})
export class ComponentsModule { }
