import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IVisitas, IVisitasData } from 'src/app/model/visitas.model';
import { VisitasService } from 'src/app/service/visitas.service';

@Component({
  selector: 'app-visitas-bypaciente-view-unrouted',
  templateUrl: './visitas-bypaciente-view-unrouted.component.html',
  styleUrls: ['./visitas-bypaciente-view-unrouted.component.css']
})
export class VisitasBypacienteViewUnroutedComponent {

  @Input() id: number = 1;

  visitas: IVisitas[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 15;
  pages: number[] = [];

  constructor(private visitaService: VisitasService, private modalService: NgbModal) {

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

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
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
