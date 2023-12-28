import { Vehiculo } from './vehiculo';
export class Cliente {
    id:string="";
    nombre:string="";
    paterno:string="";
    materno:string="";
    tipoDocumento:string="";
    numeroDocumento:number=0;
    fechaNacimiento:Date=new Date();
    genero:string="";
    vehiculos:Vehiculo[]=[];
}
