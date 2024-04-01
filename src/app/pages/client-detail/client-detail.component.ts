import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IClient } from 'src/app/models/clients.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
})
export class ClientDetailComponent implements OnInit {
  client?: IClient;
  formUpdate: FormGroup;
  clientUpdate?: IClient;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService,
    private form: FormBuilder
  ) {
    this.formUpdate = this.form.group({
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
    this._route.params.subscribe({
      next: (params: Params) => {
        this.getClientByParam(params['clienteId']);
      },
      error: (error: any) => {
        console.log(error);
        // this.loading = false;
      },
    });
  }

  getClientByParam(id: string): void {
    this._apiService.getClient(id).subscribe({
      next: (response: IClient) => {
        this.client = response;
      },
      error: (error: any) => {
        console.log(error);
        //this.loading = false;
      },
    });
  }

  updateClient(event: Event) {
    event.preventDefault();

    this.clientUpdate = {
      id: this.client?.id || '0',
      nombre: this.formUpdate.value.nameClient || this.client?.nombre,
      paterno: this.formUpdate.value.firstLastName || this.client?.paterno,
      materno: this.formUpdate.value.secondLastName || this.client?.materno,
      tipo_de_documento:
        this.formUpdate.value.typeDocument || this.client?.tipo_de_documento,
      numero_de_documento:
        this.formUpdate.value.documentNumber ||
        this.client?.numero_de_documento,
      fecha_de_nacimiento:
        this.formUpdate.value.birthDay || this.client?.fecha_de_nacimiento,
      genero: this.formUpdate.value.gender || this.client?.genero,
    };

    this._apiService
      .updateClient(this.clientUpdate.id!!, this.clientUpdate)
      .subscribe({
        next: (response: IClient) => {
          // this.client = response;
          this.getClientByParam(response.id!!);
        },
        error: (error: any) => {
          //this.loading = false;
        },
      });
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formUpdate.get(controlName)?.hasError(errorType) &&
      this.formUpdate.get(controlName)?.touched
    );
  }
}
