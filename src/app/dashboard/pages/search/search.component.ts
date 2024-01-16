import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { VehiclesService } from '../../services/vehicles/vehicles.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  displayedColumns: string[] = ['marca', 'modelo', 'anio', 'placa'];
  dataSource = new MatTableDataSource();
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private _searchService = inject(SearchService);

  dataVehicles:any = [];
  ciCustomer:string = "";
  stateTable:boolean=false;
  stateAlert:boolean = false;

  public formSearch:FormGroup = this.fb.group({
    term: ['', [Validators.required, Validators.minLength(3)]]
  });


  sendTerm(){
    this.searchTerm(this.formSearch.get("term"));
  }

  searchTerm(term:any){
    if(this.formSearch.valid){
    this._searchService.getVehicles(term.value).subscribe({
      next:(data:any)=>{
        this.ciCustomer= term.value;
        this.evaluateData(data);
      },
      error:err=>this.showSnackbar("Error al encontrar vehículos!!")
    })
    }else{
        this.showSnackbar("El campo es obligatorio");
    }
  }

  showSnackbar(message:string){
    this.snackBar.open(message, 'done',{
      duration: 2500
    })
  }

  evaluateData(data:any){
    if(data[0].length ===0){
      this.showSnackbar("El cliente no tiene ningún vehículo asignado");
    }else{
      this.dataVehicles=data;
      this.stateTable = true;
      this.dataSource = new MatTableDataSource(this.dataVehicles[0]);

    }
  }
}
