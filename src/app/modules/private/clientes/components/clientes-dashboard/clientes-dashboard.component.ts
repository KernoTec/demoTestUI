import {Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {first, noop, Observable, Subject, takeUntil} from "rxjs";
import {ModalClienteComponent} from "../../../../../shared/modal-cliente/modal-cliente.component";
import {IClienteResponse} from "../../../../../api/responses/cliente-response.interface";
import {ClientesService} from "../../../services/clientes.service";

@Component({
  selector: 'app-clientes-dashboard',
  templateUrl: './clientes-dashboard.component.html',
  styleUrls: ['./clientes-dashboard.component.css']
})
export class ClientesDashboardComponent implements OnInit,OnDestroy{
  @ViewChild('modalContainer', {read: ViewContainerRef}) modalContainer!: ViewContainerRef;

  public clientes$: Observable<IClienteResponse[]>;
  public isEdit: boolean;
  public actualCliente: IClienteResponse | null;

  private _unsubscribe: Subject<void>;

  constructor(private _clienteService: ClientesService) {
    this.actualCliente = null;
    this.isEdit = false;
    this.clientes$ = new Observable<IClienteResponse[]>();
    this._unsubscribe = new Subject<void>();
  }

  ngOnInit() {
    this.clientes$ = this._clienteService.getClientes();
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  public agregarCliente(): void {
    this.modalContainer.clear();
    const componentRef: ComponentRef<ModalClienteComponent> = this.modalContainer.createComponent(ModalClienteComponent);
    componentRef.instance.closeModal
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(() => this.modalContainer.clear());
    componentRef.instance.personaAgregada
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(() => {
        this.clientes$ = this._clienteService.getClientes();
        this.modalContainer.clear();
      });
  }

  public eliminarCliente(id: string): void {
    this._clienteService.deleteCliente(id)
      .pipe(first())
      .subscribe({
        next: () => this.clientes$ = this._clienteService.getClientes(),
        error: (e) => console.error("Error deleting client", e)
      });
  }

  public isEditing(editable: HTMLDivElement) {
    this.actualCliente = null;
    editable.contentEditable = 'false';
  }

  public editableDiv(editable: HTMLDivElement, cliente: IClienteResponse) {
    editable.contentEditable = 'true';
    this.actualCliente = cliente;
    this.isEdit = true;
  }

  updateCliente(editable: HTMLDivElement, cliente: IClienteResponse, field: keyof IClienteResponse, span: HTMLSpanElement) {
    // editable.contentEditable = 'false';
    // cliente[field] = span.textContent as string;
    //
    // this._clienteService.updateCliente(cliente.id, cliente)
    //   .pipe(takeUntil(this._unsubscribe))
    //   .subscribe({
    //     next: () => noop(),
    //     error: (err) => console.error("Error updating client", err)
    //   });
  }
}
