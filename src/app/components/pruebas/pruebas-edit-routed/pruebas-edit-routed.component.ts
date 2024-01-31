import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPruebas } from 'src/app/model/pruebas.model';
import { PruebasService } from 'src/app/service/pruebas.service';

@Component({
  selector: 'app-pruebas-edit-routed',
  templateUrl: './pruebas-edit-routed.component.html',
  styleUrls: ['./pruebas-edit-routed.component.css']
})
export class PruebasEditRoutedComponent implements OnInit {

  pruebaId!: number;
  prueba: IPruebas | undefined;

  constructor( private pruebasService: PruebasService, private route: ActivatedRoute ) {
    const pruebaIdParam = this.route.snapshot.paramMap.get('id');
    if (pruebaIdParam) {
      this.pruebaId = +pruebaIdParam;
      this.pruebasService.getDetailPrueba(this.pruebaId).subscribe(
        (data) => {
          this.prueba = data;
        },
        (error) => {
          console.error('Error obteniendo el detalle del paciente:');
        }
      );
    } else {
      console.error('No se proporcionó un ID de prueba en los parámetros de la ruta');
      // Puedes redirigir o manejar de otra manera cuando no hay un ID de paciente
    }
  }

  ngOnInit() {
  }

}
