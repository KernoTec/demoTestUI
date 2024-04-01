import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './pages/vehicles/vehicles.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AsignacionesComponent } from './pages/asignaciones/asignaciones.component';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { VehiclesDetailComponent } from './pages/vehicles-detail/vehicles-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    ClientesComponent,
    AsignacionesComponent,
    ClientDetailComponent,
    VehiclesDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
