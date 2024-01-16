import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/dashboard/interfaces/customer.interface';
import { CustomersService } from 'src/app/dashboard/services/customers/customers.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-create-edit-customer',
  templateUrl: './create-edit-customer.component.html',
  styleUrls: ['./create-edit-customer.component.css']
})
export class CreateEditCustomerComponent {
  private _customerService = inject(CustomersService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private activateRouter = inject(ActivatedRoute);

  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);


  customer:any;
  action:string = "";
  paramsId:number = 0;
  customerSend:any;

  public genders = [
    {id:"Femenino", value:"Femenino"},
    {id:"Masculino", value:"Masculino"},
    {id:"Otro", value:"Otro"}
  ]

  public documentsType = [
    {id:"Cedula de Identidad", value:"Cedula de Identidad"},
    {id:"Pasaporte", value:"Pasaporte"},
    {id:"Licencia de Conducir", value:"Licencia de Conducir"}
  ]


  public formCustomer:FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    paterno: ['', [Validators.required, Validators.minLength(3)]],
    materno: ['', [Validators.required, Validators.minLength(3)]],
    tipoDocumento: ['', [Validators.required]],
    ci:['',[Validators.required]],
    fechaNacimiento:['',[Validators.required]],
    genero:['',[Validators.required]],
  });

  constructor(){
    this.paramsId = this.activateRouter.snapshot.params['id'];
    if(this.paramsId){
      console.log(this.paramsId);
      this.getCustomer(this.paramsId);
      console.log(this.customer);
      this.action = "Editar";
    }else{
      this.action = "Crear";
      console.log("No hay ID");
    }
  }


  getCustomer(id:number){
    this._customerService.getCustomer(id).subscribe({
      next:data=>{
        this.showCustomer(data);
        this.customer = data;
        console.log(data);
      },
      error:err=>console.log(err)
    })
  }

  showCustomer(customer:Customer){
    this.formCustomer.setValue({
      nombre:customer.nombre,
      paterno:customer.paterno,
      materno:customer.materno,
      tipoDocumento:customer.tipoDocumento,
      ci:customer.ci,
      fechaNacimiento:customer.fechaNacimiento,
      genero:customer.genero
    })
  }

  createEditCustomer(){
    let customer:Customer = this.formCustomer.value
    if(this.paramsId==undefined){
      this.createCustomer(customer);
      setTimeout(()=>{
        this.router.navigate(['/dashboard/customer'])
      },2500)
    }else{
      this.editCustomer(customer, this.paramsId);
      setTimeout(()=>{
        this.router.navigate(['/dashboard/customer'])
      },2500)
    }
  }

  deleteCustomer(){
    if(!this.paramsId){
      throw Error("EL id del cliente es requerido")
    }
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: this.customer.nombre
      });
      dialogRef.afterClosed()
      .pipe(
        filter((result:boolean)=>result),
        switchMap(()=>this._customerService.deleteCustomer(this.paramsId))
      )
      .subscribe(()=>{
        this.showSnackbar(`Cliente Eliminado Correctamente`)
        setTimeout(()=>{
          this.router.navigate(['/dashboard/customer'])
        }, 2500)
      })
  }

  createCustomer(customer:Customer){
    this._customerService.saveCustomer(customer).subscribe({
      next:data=>{
        this.showSnackbar("Se creó el cliente correctamente!")
      },
      error:error=>this.showSnackbar("Error al crear cliente!")
    })
  }

  editCustomer(customer:Customer, id:number){
    this._customerService.updateCustomer(customer, id).subscribe({
      next:data=>{
        this.showSnackbar("Se editó el cliente correctamente!")
      },
      error:error=>this.showSnackbar("Error al editar cliente!")
    })
  }

  showSnackbar(message:string){
    this.snackBar.open(message, 'done',{
      duration: 2500
    })
  }
}
