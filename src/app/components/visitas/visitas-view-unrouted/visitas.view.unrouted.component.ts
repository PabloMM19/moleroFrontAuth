import { Component, Input } from '@angular/core';
import { IVisitas } from 'src/app/model/visitas.model';
import { VisitasService } from 'src/app/service/visitas.service';

@Component({
  selector: 'app-visitas-view-unrouted',
  templateUrl: 'visitas.view.unrouted.component.html',
  styleUrls: ['visitas.view.unrouted.component.css']
})
export class VisitasViewUnroutedComponent {

  @Input() visitasData: IVisitas[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 10;
  pages: number[] = [];

  constructor(private visitasService: VisitasService) { }

  ngOnInit() {
    this.cargaVisitas();
  }

  cargaVisitas() {
    this.visitasService.getVisitasDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.visitasData = data.content;
        this.totalPages = data.totalPages;
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      },
      error => {
        console.error('Error al obtener la lista de pacientes', error);
        // Maneja el error según tus necesidades
      }
    );
  }


  private actualizarListaPacientes(): void {
    // Llama a tu servicio para obtener la lista actualizada de entrenadores
    this.visitasService.getVisitasData().subscribe(
      data => {
        this.visitasData = data.content;
      },
      error => {
        console.error('Error al obtener la lista de pacientes', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  /* PAGINATION */

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.cargaVisitas();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargaVisitas();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.cargaVisitas();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.cargaVisitas();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.cargaVisitas();
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


