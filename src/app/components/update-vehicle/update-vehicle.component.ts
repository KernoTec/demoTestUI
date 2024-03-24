import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  validateForm!: FormGroup;
  id: any = this.route.snapshot.params['id'] //get the id

  userId: string = ''; // ID del usuario
  vehicleId: string = ''; // ID del vehículo

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      marca: [null, [Validators.required]],
      modelo: [null, [Validators.required]],
      anio: [null, [Validators.required]],
      placa: [null, [Validators.required]],
    });

    // Obtener los ID del usuario y del vehículo de la URL actual
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId') || '';
      this.vehicleId = params.get('vehicleId') || '';

      // Llamar a la función para obtener los detalles del vehículo por su ID
      this.getVehiculoById();
    });
  }

  getVehiculoById() {
    this.vehicleService.getVehiculoById(this.vehicleId).subscribe((res) => {
      console.log(res);
      this.validateForm.patchValue(res);
    });
  }

  updateVehicle() {
      console.log(this.validateForm.value);
      this.vehicleService.updateVehicle(this.id, this.vehicleId, this.validateForm.value).subscribe(
        (res) => {
          console.log('Vehicle updated successfully:', res);
          this.router.navigate(['/vehicle/' + this.id]);
        }
      );
  }
}
