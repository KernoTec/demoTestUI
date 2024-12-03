import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() public closeModal: EventEmitter<void>;

  vehiculoForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.closeModal = new EventEmitter<void>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.vehiculoForm = this.fb.group({
      marca: ['', [Validators.required, Validators.minLength(2)]],
      modelo: ['', [Validators.required, Validators.minLength(2)]],
      anio: ['', [Validators.required, Validators.min(1886), Validators.max(new Date().getFullYear())]], // Rango válido
      placa: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9-]+$/)]]
    });
  }

  onSubmit(): void {
    if (this.vehiculoForm.valid) {
      const nuevoVehiculo = this.vehiculoForm.value;
      console.log('Vehículo agregado:', nuevoVehiculo);
      this.resetForm();
    }
  }

  private resetForm(): void {
    this.vehiculoForm.reset();
  }
}
