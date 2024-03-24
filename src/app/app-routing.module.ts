import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './components/all-user/all-user.component';
import { PostUserComponent } from './components/post-user/post-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AllVehicleComponent } from './components/all-vehicle/all-vehicle.component';
import { PostVehicleComponent } from './components/post-vehicle/post-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';


const routes: Routes = [
  { path: '', component: AllUserComponent },

  {
    path: 'user', component: PostUserComponent
  },
  {
    path: 'user/:id', component: UpdateUserComponent
  },

  { 
    path: 'vehicle/:id', component: AllVehicleComponent 
  },

  { 
    path: 'vehicle/:id/create', component: PostVehicleComponent 
  },

  { 
    path: 'vehicle/:id/:vehicleId/update', component: UpdateVehicleComponent 
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }