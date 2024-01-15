import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public linksCustomers = [
    {
      label:'Mostrar', url:'./customer'
    },
    {
      label:'Crear', url:'./customer/create'
    }
  ]
  public linksVehicles = [
    {
      label:'Mostrar', url:'./vehicles'
    },
    {
      label:'Crear', url:'./vehicles/create'
    },
  ]
}
