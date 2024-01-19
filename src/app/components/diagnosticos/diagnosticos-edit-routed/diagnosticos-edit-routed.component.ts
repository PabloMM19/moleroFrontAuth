import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiagnosticos } from 'src/app/model/diagnosticos.model';
import { DiagnosticosService } from 'src/app/service/diagnosticos.service';

@Component({
  selector: 'app-diagnosticos-edit-routed',
  templateUrl: './diagnosticos-edit-routed.component.html',
  styleUrls: ['./diagnosticos-edit-routed.component.css']
})
export class DiagnosticosEditRoutedComponent implements OnInit {

  diagnosticoId!: number;
  diagnostico: IDiagnosticos | undefined;

  constructor(private diagnosticoService: DiagnosticosService, private route: ActivatedRoute) {
    const diagnosticoIdParam = this.route.snapshot.paramMap.get('id');
    if (diagnosticoIdParam) {
      this.diagnosticoId = +diagnosticoIdParam;
      this.diagnosticoService.getDetailDiagnostico(this.diagnosticoId).subscribe(
        (data) => {
          this.diagnostico = data;
        },
        (error) => {
          console.error('Error obteniendo el detalle del paciente:');
        }
      );
    } else {
      console.error('No se ha especificado un ID de diagnostico.');
    }
  }

  ngOnInit() {
  }

}
