import { IPaginationInfo } from "./pagination.model";

export interface IMedicacionData { 
    content: IMedicacion[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface IMedicacion {
    id: number;
    nombre: string;
    descripcion: string;
    medida_id: number;
}