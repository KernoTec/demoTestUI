import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './componentes/clientes/cliente-list/cliente-list.component';
import { ClienteNewComponent } from './componentes/clientes/cliente-new/cliente-new.component';
import { ClienteEditComponent } from './componentes/clientes/cliente-edit/cliente-edit.component';
import { ClienteDeleteComponent } from './componentes/clientes/cliente-delete/cliente-delete.component';
import { VehiculoListComponent } from './componentes/vehiculos/vehiculo-list/vehiculo-list.component';
import { VehiculoNewComponent } from './componentes/vehiculos/vehiculo-new/vehiculo-new.component';
import { VehiculoEditComponent } from './componentes/vehiculos/vehiculo-edit/vehiculo-edit.component';
import { VehiculoDeleteComponent } from './componentes/vehiculos/vehiculo-delete/vehiculo-delete.component';
import { VehiculoShowComponent } from './componentes/vehiculos/vehiculo-show/vehiculo-show.component';
import { ClienteShowComponent } from './componentes/clientes/cliente-show/cliente-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    ClienteNewComponent,
    ClienteEditComponent,
    ClienteDeleteComponent,
    VehiculoListComponent,
    VehiculoNewComponent,
    VehiculoEditComponent,
    VehiculoDeleteComponent,
    VehiculoShowComponent,
    ClienteShowComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
