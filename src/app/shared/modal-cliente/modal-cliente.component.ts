import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ClientesService } from "../../modules/private/services/clientes.service";
import { first } from "rxjs";

@Component({
  selector: 'app-modal-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent implements OnInit {
  @Output() public closeModal: EventEmitter<void>;
  @Output() public personaAgregada: EventEmitter<void>;

  personaForm!: FormGroup;

  constructor(private _clienteService: ClientesService,
              private _fb: FormBuilder) {
    this.closeModal = new EventEmitter<void>();
    this.personaAgregada = new EventEmitter<void>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.personaForm = this._fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      paterno: ['', [Validators.required, Validators.minLength(2)]],
      materno: ['', [Validators.required, Validators.minLength(2)]],
      tipoDocumento: ['', [Validators.required]],
      numeroDocumento: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]],
      fechaNacimiento: ['', [Validators.required]], // Campo de fecha
      genero: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.personaForm.valid) {
      const nuevaPersona = { ...this.personaForm.value };

      nuevaPersona.fechaNacimiento = this.formatFechaNacimiento(nuevaPersona.fechaNacimiento);

      this._clienteService.createCliente(nuevaPersona).pipe(first()).subscribe({
        next: () => this.personaAgregada.emit(),
        error: (err) => console.error(err)
      });
    }
  }

  private formatFechaNacimiento(fecha: string): string {
    const date = new Date(fecha);
    return date.toISOString(); // Formato "1978-04-05T15:30:00"
  }

  private resetForm(): void {
    this.personaForm.reset();
  }
}
