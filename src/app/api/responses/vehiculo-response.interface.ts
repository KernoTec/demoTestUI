export interface IVehiculoResponse {
  id: string;
  marca: string;
  modelo: string;
  ano: string;
  placa: string;
  asignado: boolean;
  deleted: boolean;
}

export type fieldVehiculo = 'marca' | 'modelo' | 'ano' | 'placa'
