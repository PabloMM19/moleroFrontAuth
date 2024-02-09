import { Component, OnInit } from '@angular/core';
import { IVisitas, IVisitasData } from 'src/app/model/visitas.model';
import { VisitasService } from 'src/app/service/visitas.service';

@Component({
  selector: 'app-visitas-bypaciente-view-routed',
  templateUrl: './visitas-bypaciente-view-routed.component.html',
  styleUrls: ['./visitas-bypaciente-view-routed.component.css']
})
export class VisitasBypacienteViewRoutedComponent implements OnInit {

  visitasData: IVisitas[] = [];

  constructor( private visitaService: VisitasService ) {
    this.visitaService.getVisitasByPacienteData(6).subscribe((data: IVisitasData) => {
      this.visitasData = data.content;
    })
  }
  

  ngOnInit() {
  }

}
