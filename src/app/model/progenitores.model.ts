import { IPacientes } from "./pacientes.model";
import { IPaginationInfo } from "./pagination.model";

export interface IProgenitoresData {
    content: IProgenitores[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface IProgenitores {
    id: number;
    dni: string;
    nombre: string;
    papellido: string;
    sapellido: string;
    rol: number;
    //paciente_id: number;
    paciente: IPacientes;
}