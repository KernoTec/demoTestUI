import {Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalComponent} from "../../../../../shared/modal/modal.component";
import {first, Observable, Subject, takeUntil} from "rxjs";
import {VehiculoService} from "../../../services/vehiculo.service";
import {IVehiculoResponse} from "../../../../../api/responses/vehiculo-response.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('modalContainer', {read: ViewContainerRef}) modalContainer!: ViewContainerRef;

  public vehiculos$: Observable<IVehiculoResponse[]>;

  private _unsubscribe: Subject<void>;

  constructor(private _vehiculoService: VehiculoService) {
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
  }

  public eliminarVehiculo(id: string): void {
    this._vehiculoService.deleteVehiculo(id).pipe(first())
      .subscribe({
        next: () => this.vehiculos$ = this._vehiculoService.getVehiculos(),
        error: (e) => console.error("Error deleting vehicle", e)
      })
  }
}
