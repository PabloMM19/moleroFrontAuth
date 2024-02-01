import { Component, Input, OnInit } from '@angular/core';
import { IPruebas } from 'src/app/model/pruebas.model';
import { PruebasService } from 'src/app/service/pruebas.service';

@Component({
  selector: 'app-pruebas-view-unrouted',
  templateUrl: './pruebas-view-unrouted.component.html',
  styleUrls: ['./pruebas-view-unrouted.component.css']
})
export class PruebasViewUnroutedComponent implements OnInit {

  @Input() pruebasData: IPruebas[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 15;
  pages: number[] = [];

  constructor( private pruebasService: PruebasService ) { }

  ngOnInit() {
    this.cargaPruebas();
  }

  cargaPruebas() {
    this.pruebasService.getPruebasDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.pruebasData = data.content;
        this.totalPages = data.totalPages;
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      },
      error => {
        console.error('Error al obtener la lista de pacientes', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  eliminarPrueba(id: number) {
    this.pruebasService.deletePrueba(id).subscribe(
      data => {
        console.log('Prueba eliminada');
        this.actualizarListaPacientes();
      },
      error => {
        console.error('Error eliminando la prueba: ' + error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private actualizarListaPacientes(): void {
    // Llama a tu servicio para obtener la lista actualizada de entrenadores
    this.pruebasService.getPruebasData().subscribe(
      data => {
        this.pruebasData = data.content;
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
      this.cargaPruebas();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargaPruebas();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.cargaPruebas();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.cargaPruebas();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.cargaPruebas();
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
