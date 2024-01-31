import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVisitas } from 'src/app/model/visitas.model';
import { VisitasService } from 'src/app/service/visitas.service';

@Component({
  selector: 'app-visitas-edit-routed',
  templateUrl: './visitas-edit-routed.component.html',
  styleUrls: ['./visitas-edit-routed.component.css']
})
export class VisitasEditRoutedComponent implements OnInit {


  visitaId!: number;
  visita: IVisitas | undefined;

  constructor( private visitasService: VisitasService, private route: ActivatedRoute ) {
    const visitaIdParam = this.route.snapshot.paramMap.get('id');
    if (visitaIdParam) {
      this.visitaId = +visitaIdParam;
      this.visitasService.getDetailVisita(this.visitaId).subscribe(
        (data) => {
          this.visita = data;
        },
        (error) => {
          console.error('Error obteniendo el detalle del paciente:');
        }
      );
    } else {
      console.error('No se proporcionó un ID de visita en los parámetros de la ruta');
      // Puedes redirigir o manejar de otra manera cuando no hay un ID de paciente
    }
  }

  ngOnInit() {
  }

}
