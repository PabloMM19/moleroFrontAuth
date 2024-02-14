import { IPaginationInfo } from "./pagination.model";

export interface ICalendarioData {
    content: ICalendario[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface ICalendario {
    id: number;
    title: string;
    date: string;
}