import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPacientes } from 'src/app/model/pacientes.model';
import { IProgenitores } from 'src/app/model/progenitores.model';
import { ProgenitoresService } from 'src/app/service/progenitores.service';

@Component({
  selector: 'app-progenitores-detail-unrouted',
  templateUrl: './progenitores-detail-unrouted.component.html',
  styleUrls: ['./progenitores-detail-unrouted.component.css']
})
export class ProgenitoresDetailUnroutedComponent implements OnInit {

  @Input() id: number = 6;
  progenitor: IProgenitores = {} as IProgenitores;
  pacientesAsociados: IPacientes[] = [];
  status: HttpErrorResponse | null = null;

  constructor( private progenitoresService: ProgenitoresService,  private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.id);
    this.getOneProgenitor();
  }
  
  getOneProgenitor() {
    this.progenitoresService.getOneProgenitor(this.id).subscribe({
      next: (data: IProgenitores) => {
        console.log('Data del servicio:', data);
        this.progenitor = data;
        
        // Llama a cargarPacientesAsociados() aquí, dentro de la suscripción
        this.cargarPacientesAsociados();
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    });
  }
  
  cargarPacientesAsociados() {
    this.progenitoresService.getPacientesByProgenitorId(this.progenitor.id).subscribe(
      data => {
        this.progenitor.paciente = data.length > 0 ? data[0] : {} as IPacientes;
  
        // Si progenitor.paciente es nulo, crea un objeto IPacientes vacío para evitar errores
        this.progenitor.paciente = this.progenitor.paciente || {} as IPacientes;
      },
      error => {
        console.error('Error al obtener los pacientes asociados al progenitor', error);
        // Maneja el error según tus necesidades
      }
    );
  }
  

}
