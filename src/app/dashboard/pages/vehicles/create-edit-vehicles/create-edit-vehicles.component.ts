import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/dashboard/interfaces/vehicle.interface';
import { VehiclesService } from 'src/app/dashboard/services/vehicles/vehicles.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { filter, switchMap } from 'rxjs';
import { Customer } from 'src/app/dashboard/interfaces/customer.interface';
import { CustomersService } from 'src/app/dashboard/services/customers/customers.service';

@Component({
  selector: 'app-create-edit-vehicles',
  templateUrl: './create-edit-vehicles.component.html',
  styleUrls: ['./create-edit-vehicles.component.css']
})
export class CreateEditVehiclesComponent {
  private _vehiclesService = inject(VehiclesService);
  private _customerService = inject(CustomersService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private activateRouter = inject(ActivatedRoute);

  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  vehicle:any;
  action:string = "";
  paramsId:number = 0;
  customers:Customer[] = [];

  public formVehicles:FormGroup = this.fb.group({
    marca: ['', [Validators.required, Validators.minLength(3)]],
    modelo: ['', [Validators.required, Validators.minLength(3)]],
    anio: ['', [Validators.required, Validators.minLength(3)]],
    placa: ['', [Validators.required]],
    customerId:['']
  });

  constructor(){
    this.paramsId = this.activateRouter.snapshot.params['id'];
    this.getCustomers();
    if(this.paramsId){
      this.getVehicle(this.paramsId);
      this.action = "Editar";
    }else{
      this.action = "Crear";
    }
  }

  getVehicle(id:number){
    this._vehiclesService.getVehicle(id).subscribe({
      next:data=>{
        this.showVehicle(data);
        this.vehicle = data;
        console.log(data);
      },
      error:err=>this.showSnackbar("Error al recuperar información del coche")
    })
  }

  getCustomers(){
    this._customerService.getCustomers().subscribe({
      next:data=>{
        this.customers = data;
        console.log(this.customers)
      },
      error: error=>console.log(error)
    })
  }

  showVehicle(vehicle:Vehicle){
    this.formVehicles.setValue({
      marca:vehicle.marca,
      modelo:vehicle.modelo,
      anio:vehicle.anio,
      placa:vehicle.placa,
      customerId: vehicle.customerId || ""
    })
  }

  createEditVehicle(){
    if(this.formVehicles.valid){
      let vehicle:Vehicle = this.formVehicles.value
      if(!this.paramsId){
        this.createVehicle(vehicle);
        setTimeout(()=>{
          this.router.navigate(['/dashboard/vehicle'])
        },2500)
      }else{
        this.editVehicle(vehicle, this.paramsId);
        setTimeout(()=>{
          this.router.navigate(['/dashboard/vehicle'])
        },2500)
      }

    }else{
      this.showSnackbar("Todos los campos son requeridos");
    }
  }

  deleteVehicle(){
    if(!this.paramsId){
      throw Error("EL id del cliente es requerido")
    }
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: `${this.vehicle.marca} con placa ${this.vehicle.placa}`
      });
      dialogRef.afterClosed()
      .pipe(
        filter((result:boolean)=>result),
        switchMap(()=>this._vehiclesService.deleteVehicle(this.paramsId))
      )
      .subscribe(()=>{
        this.showSnackbar(`Vehículo Eliminado Correctamente`)
        setTimeout(()=>{
          this.router.navigate(['/dashboard/vehicle'])
        }, 2500)
      })
  }

  createVehicle(vehicle:Vehicle){
    this._vehiclesService.saveVehicle(vehicle).subscribe({
      next:data=>{
        this.showSnackbar("Se creó el vehículo correctamente!")
      },
      error:error=>this.showSnackbar("Error al crear vehículo!")
    })
  }

  editVehicle(vehicle:Vehicle, id:number){
    this._vehiclesService.updateVehicle(vehicle, id).subscribe({
      next:data=>{
        this.showSnackbar("Se editó el vehículo correctamente!")
      },
      error:error=>this.showSnackbar("Error al editar vehículo!")
    })
  }

  showSnackbar(message:string){
    this.snackBar.open(message, 'done',{
      duration: 2500
    })
  }

}
