import { Component } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-vehicle',
  templateUrl: './all-vehicle.component.html',
  styleUrls: ['./all-vehicle.component.css']
})
export class AllVehicleComponent {
  vehicles: any = [];
  id: any = this.activateRoute.snapshot.params['id'] //get the id

  constructor(
    private activateRoute: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllVehicles();
  }

  getAllVehicles() {
    this.vehicleService.getAllVehicles(this.id).subscribe(res => {
      console.log(res);
      this.vehicles = res;
    });
  }

  deleteVehicle(id: any, vehicleId: any) {
    this.vehicleService.deleteVehicleByClientId(id, vehicleId).subscribe(
      (res) => {
        console.log('Vehicle deleted successfully');
        this.getAllVehicles();
      }
    );
  }
}
