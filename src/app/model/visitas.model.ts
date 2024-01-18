import { IPaginationInfo } from "./pagination.model";

export interface IVisitasData {
    content: IVisitas[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface IVisitas {
    id: number;
    fecha: string;
    comentario: string;
    diagnostico_id: number;
    paciente_id: number;
}