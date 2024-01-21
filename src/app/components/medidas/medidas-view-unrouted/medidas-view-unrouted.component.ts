import { Component, Input, OnInit } from '@angular/core';
import { IMedidas } from 'src/app/model/medida.model';
import { MedidasService } from 'src/app/service/medidas.service';

@Component({
  selector: 'app-medidas-view-unrouted',
  templateUrl: './medidas-view-unrouted.component.html',
  styleUrls: ['./medidas-view-unrouted.component.css']
})
export class MedidasViewUnroutedComponent implements OnInit {

  @Input() medidasData: IMedidas[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 10;
  pages: number[] = [];

  constructor(private medidasService: MedidasService) { }

  ngOnInit() {
    this.cargaMedidas();
  }

  cargaMedidas() {
    this.medidasService.getMedidaDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.medidasData = data.content;
        this.totalPages = data.totalPages;
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      },
      error => {
        console.error('Error al obtener la lista de pacientes', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  eliminarMedida(id: number) {
    this.medidasService.deleteMedida(id).subscribe(
      data => {
        console.log('Paciente eliminado', data);
        this.actualizarListaPacientes();
      },
      error => {
        console.error('Error al eliminar el paciente', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private actualizarListaPacientes(): void {
    // Llama a tu servicio para obtener la lista actualizada de entrenadores
    this.medidasService.getMedidaData().subscribe(
      data => {
        this.medidasData = data.content;
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
      this.cargaMedidas();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargaMedidas();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.cargaMedidas();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.cargaMedidas();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.cargaMedidas();
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
