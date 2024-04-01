import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClient } from 'src/app/models/clients.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientList: IClient[] = [];
  formRegist: FormGroup;
  clientRegist?: IClient;

  constructor(private _apiService: ApiService, private form: FormBuilder) {
    this.formRegist = this.form.group({
      nameClient: ['', Validators.required],
      firstLastName: ['', Validators.required],
      secondLastName: ['', Validators.required],
      typeDocument: ['', Validators.required],
      documentNumber: ['', Validators.required],
      birthDay: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getClientsFromApi();
  }

  getClientsFromApi(): void {
    this._apiService.getAllClients().subscribe((data: IClient[]) => {
      this.clientList = data;
    });
  }

  deleteClientById(id?: string): void {
    if (id) {
      this._apiService.deleteClient(id).subscribe((data: IClient) => {
        this.getClientsFromApi();
      });
    }
  }

  saveClient(event: Event) {
    event.preventDefault();

    this.clientRegist = {
      nombre: this.formRegist.value.nameClient,
      paterno: this.formRegist.value.firstLastName,
      materno: this.formRegist.value.secondLastName,
      tipo_de_documento: this.formRegist.value.typeDocument,
      numero_de_documento: this.formRegist.value.documentNumber,
      fecha_de_nacimiento: this.formRegist.value.birthDay,
      genero: this.formRegist.value.gender,
    };

    this._apiService
      .createClient(this.clientRegist)
      .subscribe((data: IClient) => {
        this.getClientsFromApi();
      });
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formRegist.get(controlName)?.hasError(errorType) &&
      this.formRegist.get(controlName)?.touched
    );
  }
}
