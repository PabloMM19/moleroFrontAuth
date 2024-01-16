import { IPaginationInfo } from "./pagination.model";

export interface IDiagnosticosData {
    content: IDiagnosticos[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface IDiagnosticos {
    id: number;
    nombre: string;
    descripcion: string;
}