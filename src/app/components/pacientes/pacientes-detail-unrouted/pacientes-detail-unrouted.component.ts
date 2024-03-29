import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IPacientes } from 'src/app/model/pacientes.model';
import { PacientesService } from 'src/app/service/pacientes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pacientes-detail-unrouted',
  templateUrl: './pacientes-detail-unrouted.component.html',
  styleUrls: ['./pacientes-detail-unrouted.component.css']
})
export class PacientesDetailUnroutedComponent implements OnInit {
  
  @Input() id: number = 6;
  paciente: IPacientes = {} as IPacientes;
  status: HttpErrorResponse | null = null;
  
  constructor( private pacientesService: PacientesService, private modalService: NgbModal ) { }

  ngOnInit() {
    console.log(this.id);
    this.getOnePaciente();
  }

  getOnePaciente(): void {
    this.pacientesService.getOnePaciente(this.id).subscribe({    
      next: (data: IPacientes) => {
        console.log('Data del servicio:', data);
        this.paciente = data;
        this.obtenerProgenitores();
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    });
  }
  
  obtenerProgenitores(): void {
    this.pacientesService.getProgenitoresByPacienteId(this.paciente.id).subscribe(
      (progenitores: any[]) => {
        console.log(`Progenitores asociados al paciente ${this.paciente.id}:`, progenitores);
        this.paciente.progenitores = progenitores;
        
        // Itera sobre cada progenitor para acceder al rol
        progenitores.forEach((progenitor: any) => {
          console.log(progenitor.rol);
        });
      },
      error => {
        console.error(`Error al obtener progenitores asociados al paciente ${this.paciente.id}`, error);
        // Maneja el error según tus necesidades
      }
    );
  }
  
  
  

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
