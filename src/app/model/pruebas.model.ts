import { IPaginationInfo } from "./pagination.model";

export interface IPruebasData {
    content: IPruebas[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface IPruebas {
    id: number;
    nombre: string;
    descripcion: string;
}