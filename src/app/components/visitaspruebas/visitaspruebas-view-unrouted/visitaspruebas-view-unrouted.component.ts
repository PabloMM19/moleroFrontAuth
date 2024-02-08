import { Component, Input, OnInit } from '@angular/core';
import { IVisitasPrueba } from 'src/app/model/visitaspruebas.model';
import { VisitaspruebasService } from 'src/app/service/visitaspruebas.service';

@Component({
  selector: 'app-visitaspruebas-view-unrouted',
  templateUrl: './visitaspruebas-view-unrouted.component.html',
  styleUrls: ['./visitaspruebas-view-unrouted.component.css']
})
export class VisitaspruebasViewUnroutedComponent implements OnInit {

@Input() visitaspruebasData: IVisitasPrueba[] = [];

currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 15;
  pages: number[] = [];

  constructor( private visitasPurebaService: VisitaspruebasService ) { }

  ngOnInit() {
    this.cargavisitaspruebas();
  }

  cargavisitaspruebas() {
    this.visitasPurebaService.getVisitasPruebasDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.visitaspruebasData = data.content;
        this.totalPages = data.totalPages;
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      },
      error => {
        console.error('Error al obtener la lista', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  eliminarVisitaPrueba(id: number) {
    this.visitasPurebaService.deleteVisitasPruebas(id).subscribe(
      data => {
        console.log('Prueba eliminada');
        this.actualizarListaVisitaPruebas();
      },
      error => {
        console.error('Error eliminando la prueba: ' + error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private actualizarListaVisitaPruebas(): void {
    // Llama a tu servicio para obtener la lista actualizada de entrenadores
    this.visitasPurebaService.getVisitasPruebasData().subscribe(
      data => {
        this.visitaspruebasData = data.content;
      },
      error => {
        console.error('Error al obtener la lista de pruebas', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  /* PAGINATION */

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.cargavisitaspruebas();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargavisitaspruebas();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.cargavisitaspruebas();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.cargavisitaspruebas();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.cargavisitaspruebas();
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
