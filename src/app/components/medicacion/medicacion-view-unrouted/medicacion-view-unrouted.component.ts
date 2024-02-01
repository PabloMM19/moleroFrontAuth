import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IMedicacion } from 'src/app/model/medicacion.model';
import { MedicacionService } from 'src/app/service/medicacion.service';

@Component({
  selector: 'app-medicacion-view-unrouted',
  templateUrl: './medicacion-view-unrouted.component.html',
  styleUrls: ['./medicacion-view-unrouted.component.css']
})
export class MedicacionViewUnroutedComponent implements OnInit {

  @Input() medicacionData: IMedicacion[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 10;
  pages: number[] = [];

  constructor( private medicacionService: MedicacionService, private modalService: NgbModal ) { }

  ngOnInit() {
    this.cargaMedicacion();
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  cargaMedicacion() {
    this.medicacionService.getMedicacionDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.medicacionData = data.content;
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
    this.medicacionService.getMedicacionData().subscribe(
      data => {
        this.medicacionData = data.content;
      },
      error => {
        console.error('Error al obtener la lista de pacientes', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  eliminarMedicacion(id: number) {
    this.medicacionService.deleteMedicacion(id).subscribe(
      data => {
        console.log('Medicacion borrada', data);
        this.actualizarListaPacientes();
      },
      error => {
        console.error('Error al borrar la medicacion', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  /* PAGINATION */

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.cargaMedicacion();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargaMedicacion();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.cargaMedicacion();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.cargaMedicacion();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.cargaMedicacion();
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
