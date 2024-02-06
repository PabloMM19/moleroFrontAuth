import { IMedicacion } from "./medicacion.model";
import { IPaginationInfo } from "./pagination.model";
import { IVisitas } from "./visitas.model";

export interface IVisitasMedicacionData {
    content: IVisitasMedicacion[];
    totalPages: number;
    paginationInfo: IPaginationInfo;
}

export interface IVisitasMedicacion {
    id: number;
    visita: IVisitas,
    medicacion: IMedicacion
}