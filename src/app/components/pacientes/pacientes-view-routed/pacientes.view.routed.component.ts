import { Component, OnInit } from '@angular/core';
import { IPacientes, IPacientesData } from 'src/app/model/pacientes.model';
import { PacientesService } from 'src/app/service/pacientes.service';

@Component({
  selector: 'app-pacientes-view-routed',
  templateUrl: 'pacientes.view.routed.component.html',
  styleUrls: ['pacientes.view.routed.component.css']
})
export class PacientesViewRoutedComponent implements OnInit {

  pacientesData: IPacientes[] = [];

  constructor(private dataService: PacientesService) {
    this.dataService.getPacienteData().subscribe((data: IPacientesData) => {
      this.pacientesData = data.content;
      console.log(data); // Imprime los datos en la consola para verificar que se estan recibiendo
    });
  }

  ngOnInit() {
  }

}
