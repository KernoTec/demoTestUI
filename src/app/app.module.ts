import { ClienteServiceService } from './servicios/cliente-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { AsignacionComponent } from './componentes/asignacion/asignacion.component';
import { VehiculoComponent } from './componentes/vehiculo/vehiculo.component';
import { ClienteFormComponent } from './componentes/forms/cliente-form/cliente-form.component';
import { VehiculoFormComponent } from './componentes/forms/vehiculo-form/vehiculo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    AsignacionComponent,
    VehiculoComponent,
    ClienteFormComponent,
    VehiculoFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteServiceService],
  bootstrap: [AppComponent,ClienteComponent,VehiculoComponent,AsignacionComponent,ClienteFormComponent,VehiculoFormComponent]
})
export class AppModule { }
