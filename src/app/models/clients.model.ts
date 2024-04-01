export interface IClient{
    id?: string,
    nombre?: string,
    paterno?: string,
    materno?:string,  
    tipo_de_documento?: Document,
    numero_de_documento?: string,
    fecha_de_nacimiento?: string,
    genero?: Genero

}

export enum Document{
Cedula = "Cédula de Identidad",
Pasaporte = "Pasaporte",
Licencia = "Licencia de Conducir" 
}

export enum Genero{
    Masculino = "masculino" , 
    Femenino= "femenino"
}