import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVisitas } from 'src/app/model/visitas.model';
import { VisitasService } from 'src/app/service/visitas.service';

@Component({
  selector: 'app-visitas-bypaciente-view-routed',
  templateUrl: './visitas-bypaciente-view-routed.component.html',
  styleUrls: ['./visitas-bypaciente-view-routed.component.css']
})
export class VisitasBypacienteViewRoutedComponent implements OnInit {
  pacienteId!: number;

  constructor(
    private visitaService: VisitasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pacienteId = params['id']; // Obtiene el id del paciente de la URL
    });
  }
}
