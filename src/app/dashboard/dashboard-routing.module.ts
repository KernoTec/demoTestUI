import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowCustomerComponent } from './pages/customers/show-customer/show-customer.component';
import { CreateEditCustomerComponent } from './pages/customers/create-edit-customer/create-edit-customer.component';
import { ShowVehiclesComponent } from './pages/vehicles/show-vehicles/show-vehicles.component';
import { CreateEditVehiclesComponent } from './pages/vehicles/create-edit-vehicles/create-edit-vehicles.component';

const routes: Routes = [
  {
    path:'',
    component: NavbarComponent,
    children:[
      {
        path:'customer',
        component: ShowCustomerComponent
      },
      {
        path:'customer/create',
        component: CreateEditCustomerComponent
      },
      {
        path:'customer/edit/:id',
        component: CreateEditCustomerComponent
      },
      {
        path:'vehicles',
        component: ShowVehiclesComponent
      },
      {
        path:'vehicles/create',
        component: CreateEditVehiclesComponent
      },
      {
        path:'vehicles/edit/:id',
        component: CreateEditVehiclesComponent
      },
      {
        path:'**',
        redirectTo: 'customer'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
