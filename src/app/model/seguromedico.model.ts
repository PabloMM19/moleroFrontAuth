import { IPaginationInfo } from "./pagination.model";

export interface ISeguroMedicoData {
    content: ISeguroMedico[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface ISeguroMedico {
    id: number;
    companyia: string;
    descripcion: string;
}