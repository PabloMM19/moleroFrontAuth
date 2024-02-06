import { IDiagnosticos } from "./diagnosticos.model";
import { IPacientes } from "./pacientes.model";
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
    diagnostico: IDiagnosticos;
    paciente: IPacientes;
}