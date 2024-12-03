import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path:'vehiculos',
    loadChildren: () => import('./modules/private/vehiculos/vehiculos.module').then(m => m.VehiculosModule)
  },
  {
    path: '',
    redirectTo: 'vehiculos',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
