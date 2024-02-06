import { IPaginationInfo } from "./pagination.model";
import { IPruebas } from "./pruebas.model";
import { IVisitas } from "./visitas.model";

export interface IVisitasPruebasData {
    content: IVisitasPrueba[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface IVisitasPrueba {
    id: number;
    visita: IVisitas,
    prueba: IPruebas
}