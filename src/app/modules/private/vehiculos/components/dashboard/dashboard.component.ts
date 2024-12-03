import {Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalComponent} from "../../../../../shared/modal/modal.component";
import {first, noop, Observable, Subject, takeUntil} from "rxjs";
import {VehiculoService} from "../../../services/vehiculo.service";
import {fieldVehiculo, IVehiculoResponse} from "../../../../../api/responses/vehiculo-response.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('modalContainer', {read: ViewContainerRef}) modalContainer!: ViewContainerRef;

  public vehiculos$: Observable<IVehiculoResponse[]>;
  public isEdit: boolean;
  public actualVehiculo: IVehiculoResponse | null;

  private _unsubscribe: Subject<void>;

  constructor(private _vehiculoService: VehiculoService) {
    this.actualVehiculo = null;
    this.isEdit = false;
    this.vehiculos$ = new Observable<IVehiculoResponse[]>();
    this._unsubscribe = new Subject<void>();
  }

  ngOnInit() {
    this.vehiculos$ = this._vehiculoService.getVehiculos();
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  public agregarVehiculo(): void {
    this.modalContainer.clear();
    const componentRef: ComponentRef<ModalComponent> = this.modalContainer.createComponent(ModalComponent);
    componentRef.instance.closeModal
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(() => this.modalContainer.clear())
    componentRef.instance.vehiculoAgregado
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(() => {
        this.vehiculos$ = this._vehiculoService.getVehiculos()
        this.modalContainer.clear();
      })
  }

  public eliminarVehiculo(id: string): void {
    this._vehiculoService.deleteVehiculo(id).pipe(first())
      .subscribe({
        next: () => this.vehiculos$ = this._vehiculoService.getVehiculos(),
        error: (e) => console.error("Error deleting vehicle", e)
      })
  }

  public isEditing(editable: HTMLDivElement) {
    this.actualVehiculo = null;
    editable.contentEditable = 'false';
  }

  public editableDiv(editable: HTMLDivElement, vehiculo: IVehiculoResponse) {
    editable.contentEditable = 'true';
    this.actualVehiculo = vehiculo;
    this.isEdit = true;
  }

  updateVehiculo(editable: HTMLDivElement, vehiculo: IVehiculoResponse, field: fieldVehiculo, placa: HTMLSpanElement) {
    editable.contentEditable = 'false';
    if (field === 'ano') {
      vehiculo[field] = placa.textContent as string;
    }

    if (field === 'modelo') {
      vehiculo[field] = placa.textContent as string;
    }

    if (field === 'marca') {
      vehiculo[field] = placa.textContent as string;
    }

    if (field === 'placa') {
      vehiculo[field] = placa.textContent as string;
    }

    this._vehiculoService.updateVehiculo(vehiculo.id, vehiculo)
      .pipe(takeUntil(this._unsubscribe))
      .subscribe({
        next: () => noop(),
        error: (err) => console.error("Error Uploading Vehiculo", err)
      })
  }
}
