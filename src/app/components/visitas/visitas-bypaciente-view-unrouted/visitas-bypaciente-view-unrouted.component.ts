import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IVisitas, IVisitasData } from 'src/app/model/visitas.model';
import { IVisitasMedicacion } from 'src/app/model/visitasmedicacion.model';
import { IVisitasPrueba } from 'src/app/model/visitaspruebas.model';
import { VisitasService } from 'src/app/service/visitas.service';
import { VisitasmedicacionService } from 'src/app/service/visitasmedicacion.service';
import { VisitaspruebasService } from 'src/app/service/visitaspruebas.service';

@Component({
  selector: 'app-visitas-bypaciente-view-unrouted',
  templateUrl: './visitas-bypaciente-view-unrouted.component.html',
  styleUrls: ['./visitas-bypaciente-view-unrouted.component.css']
})
export class VisitasBypacienteViewUnroutedComponent {

  @Input() id: number = 1;

  selectedCard: number = 0;

  visitas: IVisitas[] = [];
  visitasmedicacionData:IVisitasMedicacion[] = [];
  visitaspruebasData: IVisitasPrueba[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 15;
  pages: number[] = [];

  constructor(private visitaService: VisitasService, private modalService: NgbModal, private visitasMedicacionService: VisitasmedicacionService,
    private visitasPruebaService: VisitaspruebasService) {

  }

  ngOnInit() {
    console.log(this.id);
    this.getVisitasByPacienteData(this.id);
  }

  getVisitasByPacienteData(id: number) {
    this.visitaService.getVisitasByPacienteData(id).subscribe(
      (data: IVisitas | IVisitas[]) => {
        if (Array.isArray(data)) {
          this.visitas = data;
        } else {
          this.visitas = [data];
        }
        console.log('Visitas del paciente:', this.visitas);
      },
      (error) => {
        console.error('Error al obtener las visitas del paciente:', error);
      }
    );
  }

  getVisitasMedicacionByVisitaId(id: number) {
    this.visitasMedicacionService.getVisitasMedicacionByVisitaId(id).subscribe(
      (data: any) => {
        if (Array.isArray(data.content)) {
          this.visitasmedicacionData = data.content;
        } else {
          this.visitasmedicacionData = [data.content];
        }
        console.log('Medicacion de la visita:', this.visitasmedicacionData);
      },
      (error) => {
        console.error('Error al obtener la lista', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  getVisitasPruebasByVisitaId(id: number) {
    this.visitasPruebaService.getbyvisitaid(id).subscribe(
      (data: IVisitasPrueba | IVisitasPrueba[]) => {
        if (Array.isArray(data)) {
          this.visitaspruebasData = data;
        } else {
          this.visitaspruebasData = [data];
        }
        console.log('Pruebas de la visita:', this.visitaspruebasData);
      },
      (error) => {
        console.error('Error al obtener la lista', error);
        // Maneja el error según tus necesidades
      }
    );
  }


  openModal(content: any, visitaId: number) {
    this.getVisitasMedicacionByVisitaId(visitaId);
    this.getVisitasPruebasByVisitaId(visitaId);
    this.modalService.open(content, { centered: true, size: 'lg' });
}

  showDetails(cardNumber: number) {
    this.selectedCard = cardNumber;
}
  

  /* PAGINATION */

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.getVisitasByPacienteData(this.id);
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getVisitasByPacienteData(this.id);
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.getVisitasByPacienteData(this.id);
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.getVisitasByPacienteData(this.id);
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.getVisitasByPacienteData(this.id);
  }

  generatePageNumbers(): (number | string)[] {
    const pageNumbers: (number | string)[] = [];

    // Botón para ir a la primera página (<<)
    pageNumbers.push('<<');

    // Página actual -2, página actual -1, página actual, página actual +1, página actual +2
    for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
      if (i >= 0 && i < this.totalPages) {
        pageNumbers.push(i);
      }
    }

    // Botón para ir a la última página (>>)
    pageNumbers.push('>>');

    return pageNumbers;
  }
}
