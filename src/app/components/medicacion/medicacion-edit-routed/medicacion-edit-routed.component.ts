import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMedicacion } from 'src/app/model/medicacion.model';
import { MedicacionService } from 'src/app/service/medicacion.service';

@Component({
  selector: 'app-medicacion-edit-routed',
  templateUrl: './medicacion-edit-routed.component.html',
  styleUrls: ['./medicacion-edit-routed.component.css']
})
export class MedicacionEditRoutedComponent implements OnInit {

  medicacionId!: number;
  medicacion: IMedicacion | undefined;

  constructor( private medicacionService: MedicacionService, private route: ActivatedRoute ) {
    const medicacionIdParam = this.route.snapshot.paramMap.get('id');
    if (medicacionIdParam) {
      this.medicacionId = +medicacionIdParam;
      this.medicacionService.getDetailMedicacion(this.medicacionId).subscribe(
        (data) => {
          this.medicacion = data;
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
