export interface IClienteResponse {
  id: string;
  nombre: string;
  paterno: string;
  materno: string;
  tipoDocumento: string;
  numeroDocumento: string;
  fechaNacimiento: Date;
  genero: string;
  deleted: boolean;
}
