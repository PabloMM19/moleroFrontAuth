import { IPaginationInfo } from "./pagination.model";

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
    seguromedico_id: number;
}