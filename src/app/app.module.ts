import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { PostUserComponent } from './components/post-user/post-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllVehicleComponent } from './components/all-vehicle/all-vehicle.component';
import { PostVehicleComponent } from './components/post-vehicle/post-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    PostUserComponent,
    UpdateUserComponent,
    AllVehicleComponent,
    PostVehicleComponent,
    UpdateVehicleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
