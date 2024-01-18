import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPacientes } from 'src/app/model/pacientes.model';
import { PacientesService } from 'src/app/service/pacientes.service';

@Component({
  selector: 'app-pacientes-edit-routed',
  templateUrl: './pacientes-edit-routed.component.html',
  styleUrls: ['./pacientes-edit-routed.component.css']
})
export class PacientesEditRoutedComponent implements OnInit {

  pacienteId!: number;
  paciente: IPacientes | undefined;

  constructor(private pacienteService: PacientesService, private route: ActivatedRoute) {
    const pacienteIdParam = this.route.snapshot.paramMap.get('id');
    if (pacienteIdParam) {
      this.pacienteId = +pacienteIdParam;
      this.pacienteService.getDetailPaciente(this.pacienteId).subscribe(
        (data) => {
          this.paciente = data;
        },
        (error) => {
          console.error('Error obteniendo el detalle del paciente:');
        }
      );
    } else {
      console.error('No se proporcionó un ID de paciente en los parámetros de la ruta');
      // Puedes redirigir o manejar de otra manera cuando no hay un ID de paciente
    }
  }

  ngOnInit() {
  }

}
