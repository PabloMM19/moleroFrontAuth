import { IPaginationInfo } from "./pagination.model";
import { ISeguroMedico } from "./seguromedico.model";

export interface IPacientesData {
    content: IPacientes[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface IPacientes {
    id: number;
    codigo: string;
    nombre: string;
    papellido: string;
    sapellido: string;
    foto: string;
    seguroMedico: ISeguroMedico;
    progenitores?: any[];
}