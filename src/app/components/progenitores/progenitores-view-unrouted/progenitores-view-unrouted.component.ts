import { Component, Input, OnInit } from '@angular/core';
import { IPacientes } from 'src/app/model/pacientes.model';
import { IProgenitores } from 'src/app/model/progenitores.model';
import { ProgenitoresService } from 'src/app/service/progenitores.service';

@Component({
  selector: 'app-progenitores-view-unrouted',
  templateUrl: './progenitores-view-unrouted.component.html',
  styleUrls: ['./progenitores-view-unrouted.component.css']
})
export class ProgenitoresViewUnroutedComponent implements OnInit {

  @Input() progenitoresData: IProgenitores[] = [];
  pacientesAsociados: IPacientes[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 10;
  pages: number[] = [];

  constructor( private progenitoresService: ProgenitoresService ) { }

  ngOnInit() {
    this.cargaProgenitores();
  }

  cargaProgenitores() {
    this.progenitoresService.getProgenitorDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.progenitoresData = data.content;
        this.totalPages = data.totalPages;
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
        
        // Luego de cargar los progenitores, carga los pacientes asociados
        this.cargarPacientesAsociados();
      },
      error => {
        console.error('Error al obtener la lista de pacientes', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  cargarPacientesAsociados() {
    // Itera sobre los progenitores para cargar los pacientes asociados de cada uno
    this.progenitoresData.forEach(progenitor => {
      this.progenitoresService.getPacientesByProgenitorId(progenitor.id).subscribe(
        data => {
          progenitor.paciente = data.length > 0 ? data[0] : {} as IPacientes;
  
          // Si progenitor.paciente es nulo, crea un objeto IPacientes vacío para evitar errores
          progenitor.paciente = progenitor.paciente || {} as IPacientes;
        },
        error => {
          console.error('Error al obtener los pacientes asociados al progenitor', error);
          // Maneja el error según tus necesidades
        }
      );
    });
  }
  

  eliminarProgenitor(id: number) {
    this.progenitoresService.deleteProgenitor(id).subscribe(
      data => {
        console.log('Progenitor eliminado', data);
        this.actualizarListaPacientes();
      },
      error => {
        console.error('Error al eliminar el progenitor', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private actualizarListaPacientes(): void {
    // Llama a tu servicio para obtener la lista actualizada de entrenadores
    this.progenitoresService.getProgenitorData().subscribe(
      data => {
        this.progenitoresData = data.content;
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
      this.cargaProgenitores();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargaProgenitores();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.cargaProgenitores();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.cargaProgenitores();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.cargaProgenitores();
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
