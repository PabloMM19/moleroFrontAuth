import { Component, Input } from '@angular/core';
import { IPacientes } from 'src/app/model/pacientes.model';
import { PacientesService } from 'src/app/service/pacientes.service';

@Component({
  selector: 'app-pacientes-view-unrouted',
  templateUrl: 'pacientes.view.unrouted.component.html',
  styleUrls: ['pacientes.view.unrouted.component.css']
})
export class PacientesViewUnroutedComponent {
  @Input() pacientesData: IPacientes[] = [];

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 10;
  pages: number[] = [];

  constructor(private pacientesService: PacientesService) { }

  ngOnInit() {
    this.cargaPacientes();
  }

  cargaPacientes() {
    this.pacientesService.getPacienteDataPage(this.currentPage, this.pageSize).subscribe(
        data => {
            this.pacientesData = data.content;
            this.totalPages = data.totalPages;
            this.pages = Array.from({ length: this.totalPages }, (_, i) => i);

            // Obtener progenitores para cada paciente
            this.pacientesData.forEach(paciente => {
                this.obtenerProgenitoresPorIdDelPaciente(paciente.id);
            });
        },
        error => {
            console.error('Error al obtener la lista de pacientes', error);
            // Maneja el error según tus necesidades
        }
    );
}

obtenerProgenitoresPorIdDelPaciente(pacienteId: number) {
    this.pacientesService.getProgenitoresByPacienteId(pacienteId).subscribe(
        progenitores => {
            console.log(`Progenitores asociados al paciente ${pacienteId}:`, progenitores);
            // Asignar progenitores al paciente
            const paciente = this.pacientesData.find(p => p.id === pacienteId);
            if (paciente) {
                paciente.progenitores = progenitores;
            }
        },
        error => {
            console.error(`Error al obtener progenitores asociados al paciente ${pacienteId}`, error);
            // Maneja el error según tus necesidades
        }
    );
}


  eliminarPaciente(id: number) {
    this.pacientesService.deletePaciente(id).subscribe(
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
    this.pacientesService.getPacienteData().subscribe(
      data => {
        this.pacientesData = data.content;
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
      this.cargaPacientes();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.cargaPacientes();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.cargaPacientes();
    }
  }


  goToFirstPage() {
    this.currentPage = 0;
    this.cargaPacientes();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.cargaPacientes();
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
