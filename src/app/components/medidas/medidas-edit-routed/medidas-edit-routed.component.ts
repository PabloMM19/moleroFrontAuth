import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMedidas } from 'src/app/model/medida.model';
import { MedidasService } from 'src/app/service/medidas.service';

@Component({
  selector: 'app-medidas-edit-routed',
  templateUrl: './medidas-edit-routed.component.html',
  styleUrls: ['./medidas-edit-routed.component.css']
})
export class MedidasEditRoutedComponent implements OnInit {
  medidaId!: number;
  medida: IMedidas | undefined;

  constructor(private medidaService: MedidasService, private route: ActivatedRoute) {
    const medidaIdParam = this.route.snapshot.paramMap.get('id');
    if (medidaIdParam) {
      this.medidaId = +medidaIdParam;
      this.medidaService.getDetailMedida(this.medidaId).subscribe(
        (data) => {
          this.medida = data;
        },
        (error) => {
          console.error('Error obteniendo el detalle del medida:');
        }
      );
    } else {
      console.error('No se proporcionó un ID de medida en los parámetros de la ruta');
      // Puedes redirigir o manejar de otra manera cuando no hay un ID de medida
    }
  }

  ngOnInit() {
  }

}
