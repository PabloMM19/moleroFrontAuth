import { Component, Input, OnInit } from '@angular/core';
import { ISeguroMedico } from 'src/app/model/seguromedico.model';
import { SeguroMedicoService } from 'src/app/service/seguroMedico.service';

@Component({
  selector: 'app-seguromedico-view-unrouted',
  templateUrl: './seguromedico-view-unrouted.component.html',
  styleUrls: ['./seguromedico-view-unrouted.component.css']
})
export class SeguromedicoViewUnroutedComponent implements OnInit {

  @Input() segurosMedicosData: ISeguroMedico[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 10;
  pages: number[] = [];

  constructor( private segurosService: SeguroMedicoService ) { }

  ngOnInit() {
    this.cargaSeguros();
  }

  cargaSeguros() {
    this.segurosService.getSeguroMedicoDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.segurosMedicosData = data.content;
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
    this.segurosService.getSeguroMedicoData().subscribe(
      data => {
        this.segurosMedicosData = data.content;
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
      this.cargaSeguros();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargaSeguros();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.cargaSeguros();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.cargaSeguros();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.cargaSeguros();
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
