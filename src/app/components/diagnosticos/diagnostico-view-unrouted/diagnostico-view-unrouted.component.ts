import { Component, Input, OnInit } from '@angular/core';
import { IDiagnosticos } from 'src/app/model/diagnosticos.model';
import { DiagnosticosService } from 'src/app/service/diagnosticos.service';

@Component({
  selector: 'app-diagnostico-view-unrouted',
  templateUrl: './diagnostico-view-unrouted.component.html',
  styleUrls: ['./diagnostico-view-unrouted.component.css']
})
export class DiagnosticoViewUnroutedComponent implements OnInit {

  @Input() diagnosticosData: IDiagnosticos[] = [];
  
  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 15;
  pages: number[] = [];

  constructor(private diagnosticosService: DiagnosticosService) { }

  ngOnInit() {
    this.cargaDiagnosticos();
  }

  cargaDiagnosticos() {
    this.diagnosticosService.getDiagnosticoDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.diagnosticosData = data.content;
        this.totalPages = data.totalPages;
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      },
      error => {
        console.error('Error al obtener la lista de pacientes', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  

  eliminarDiagnostico(id: number) {
    this.diagnosticosService.deleteDiagnostico(id).subscribe(
      data => {
        console.log('Diagnostico eliminado', data);
        this.actualizarListaDiagnosticos();
      },
      error => {
        console.error('Error al eliminar el paciente', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private actualizarListaDiagnosticos(): void {
    // Llama a tu servicio para obtener la lista actualizada de entrenadores
    this.diagnosticosService.getDiagnosticoData().subscribe(
      data => {
        this.diagnosticosData = data.content;
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
      this.cargaDiagnosticos();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargaDiagnosticos();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.cargaDiagnosticos();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.cargaDiagnosticos();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.cargaDiagnosticos();
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
