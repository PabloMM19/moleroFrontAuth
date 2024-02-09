import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IVisitas, IVisitasData } from 'src/app/model/visitas.model';
import { VisitasService } from 'src/app/service/visitas.service';

@Component({
  selector: 'app-visitas-bypaciente-view-unrouted',
  templateUrl: './visitas-bypaciente-view-unrouted.component.html',
  styleUrls: ['./visitas-bypaciente-view-unrouted.component.css']
})
export class VisitasBypacienteViewUnroutedComponent{

  @Input() visita: IVisitas[] = []; // Reemplaza 6 con el ID del paciente deseado
  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 15;
  pages: number[] = [];

  constructor(private visitaService: VisitasService) { }

  ngOnInit() {
    this.getVisitasByPacienteData();
  }

  getVisitasByPacienteData(id: number = 6) {
    console.log('ID del paciente:', id);
    this.visitaService.getVisitasByPacienteData(id).subscribe(
      (data: IVisitasData) => {
        this.visita = data.content;
        console.log('Visitas del paciente:', this.visita);
      },
      (error) => {
        console.error('Error al obtener las visitas del paciente:', error);
      }
    );
  }

  /* PAGINATION */

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      //this.cargaPruebas();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      //this.cargaPruebas();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      //this.cargaPruebas();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    //this.cargaPruebas();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    //this.cargaPruebas();
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
