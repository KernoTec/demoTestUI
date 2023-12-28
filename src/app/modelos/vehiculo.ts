import { Cliente } from "./cliente";

export class Vehiculo {
    id:string="";
    marca: string="";
    modelo: string="";
    anio: number=0;
    placa: string="";
    cliente?:Cliente=new Cliente();
}
