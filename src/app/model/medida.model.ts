import { IPaginationInfo } from "./pagination.model";

export interface IMedidasData {
    content: IMedidas[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface IMedidas {
    id: number;
    nombre: string;
}