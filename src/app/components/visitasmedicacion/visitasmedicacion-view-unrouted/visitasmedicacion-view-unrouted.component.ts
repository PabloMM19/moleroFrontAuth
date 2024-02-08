import { VisitasmedicacionService } from 'src/app/service/visitasmedicacion.service';
import { IVisitasMedicacion } from './../../../model/visitasmedicacion.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitasmedicacion-view-unrouted',
  templateUrl: './visitasmedicacion-view-unrouted.component.html',
  styleUrls: ['./visitasmedicacion-view-unrouted.component.css']
})
export class VisitasmedicacionViewUnroutedComponent implements OnInit {

  @Input() visitasmedicacionData: IVisitasMedicacion[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 15;
  pages: number[] = [];

  constructor( private visitasMedicacionService: VisitasmedicacionService ) { }

  ngOnInit() {
    this.cargavisitasmedicaciones();
  }

  cargavisitasmedicaciones() {
    this.visitasMedicacionService.getVisitasMedicacionDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.visitasmedicacionData = data.content;
        this.totalPages = data.totalPages;
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      },
      error => {
        console.error('Error al obtener la lista', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  eliminarVisitaMedicacion(id: number) {
    this.visitasMedicacionService.deleteVisitasMedicacion(id).subscribe(
      data => {
        console.log('Prueba eliminada');
        this.actualizarListaVisitaMedicaciones();
      },
      error => {
        console.error('Error eliminando la prueba: ' + error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private actualizarListaVisitaMedicaciones(): void {
    // Llama a tu servicio para obtener la lista actualizada de entrenadores
    this.visitasMedicacionService.getVisitasMedicacionData().subscribe(
      data => {
        this.visitasmedicacionData = data.content;
      },
      error => {
        console.error('Error al obtener la lista de medicaciones', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  /* PAGINATION */

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.cargavisitasmedicaciones();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargavisitasmedicaciones();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.cargavisitasmedicaciones();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.cargavisitasmedicaciones();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.cargavisitasmedicaciones();
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
