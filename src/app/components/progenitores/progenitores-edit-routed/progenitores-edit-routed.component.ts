import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProgenitores } from 'src/app/model/progenitores.model';
import { ProgenitoresService } from 'src/app/service/progenitores.service';

@Component({
  selector: 'app-progenitores-edit-routed',
  templateUrl: './progenitores-edit-routed.component.html',
  styleUrls: ['./progenitores-edit-routed.component.css']
})
export class ProgenitoresEditRoutedComponent implements OnInit {


  progenitorId!: number;
  progenitor: IProgenitores | undefined;

  constructor(private progenitoresService: ProgenitoresService, private route: ActivatedRoute) {
    const progenitorIdParam = this.route.snapshot.paramMap.get('id');
    if (progenitorIdParam) {
      this.progenitorId = +progenitorIdParam;
      this.progenitoresService.getDetailProgenitor(this.progenitorId).subscribe(
        (data) => {
          this.progenitor = data;
        },
        (error) => {
          console.error('Error obteniendo el detalle del paciente:');
        }
      );
    } else {
      console.error('No se proporcionó un ID de progenitor en los parámetros de la ruta');
      // Puedes redirigir o manejar de otra manera cuando no hay un ID de paciente
    }
  }

  ngOnInit() {
  }

}
