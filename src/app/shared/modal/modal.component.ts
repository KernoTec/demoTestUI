import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {VehiculoService} from "../../modules/private/services/vehiculo.service";
import {IVehiculoRequest} from "../../api/requests/vehiculo-request.interface";
import {first} from "rxjs";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() public closeModal: EventEmitter<void>;
  @Output() public vehiculoAgregado: EventEmitter<void>;

  vehiculoForm!: FormGroup;

  constructor(private _vehiculoService: VehiculoService,
              private _fb: FormBuilder) {
    this.closeModal = new EventEmitter<void>();
    this.vehiculoAgregado = new EventEmitter<void>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.vehiculoForm = this._fb.group({
      marca: ['', [Validators.required, Validators.minLength(2)]],
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      ano: ['', [Validators.required, Validators.min(1886), Validators.max(new Date().getFullYear() + 1)]], // Rango válido
      placa: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9-]+$/)]]
    });
  }

  onSubmit(): void {
    if (this.vehiculoForm.valid) {
      const nuevoVehiculo: IVehiculoRequest = this.vehiculoForm.value;
      this._vehiculoService.createVehiculo(nuevoVehiculo)
        .pipe(first())
        .subscribe({
          next: () => this.vehiculoAgregado.emit(),
          error: (e) => console.error('Error Creating Vehiculo ', e)
        })
    }
  }

  private resetForm(): void {
    this.vehiculoForm.reset();
  }
}
