import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShowCustomerComponent } from './pages/customers/show-customer/show-customer.component';
import { CreateEditCustomerComponent } from './pages/customers/create-edit-customer/create-edit-customer.component';
import { ShowVehiclesComponent } from './pages/vehicles/show-vehicles/show-vehicles.component';
import { CreateEditVehiclesComponent } from './pages/vehicles/create-edit-vehicles/create-edit-vehicles.component';
import { NavbarComponent } from './layout/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './pages/components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ShowCustomerComponent,
    CreateEditCustomerComponent,
    ShowVehiclesComponent,
    CreateEditVehiclesComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
