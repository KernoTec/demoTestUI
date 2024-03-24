import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-vehicle',
  templateUrl: './post-vehicle.component.html',
  styleUrls: ['./post-vehicle.component.css']
})
export class PostVehicleComponent implements OnInit {
  validateForm!: FormGroup;
  userId: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params['id']; 
    console.log('userId:', this.userId);

    this.validateForm = this.fb.group({
      marca: [null, [Validators.required]],
      modelo: [null, [Validators.required]],
      anio: [null, [Validators.required]],
      placa: [null, [Validators.required]],
    });
  }

  postVehicle() {
    if (this.validateForm.valid) {
      console.log(this.validateForm.value);
      this.vehicleService.postVehicle(this.userId, this.validateForm.value).subscribe(
        (res) => {
          console.log('Vehicle created successfully:', res);
          this.router.navigate(['/vehicle/' + this.userId]);
        },
        (error) => {
          console.error('Error creating vehicle:', error);
        }
      );
    }
  }
}
