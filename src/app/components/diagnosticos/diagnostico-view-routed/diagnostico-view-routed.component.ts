import { Component, OnInit } from '@angular/core';
import { IDiagnosticos, IDiagnosticosData } from 'src/app/model/diagnosticos.model';
import { DiagnosticosService } from 'src/app/service/diagnosticos.service';

@Component({
  selector: 'app-diagnostico-view-routed',
  templateUrl: './diagnostico-view-routed.component.html',
  styleUrls: ['./diagnostico-view-routed.component.css']
})
export class DiagnosticoViewRoutedComponent implements OnInit {

diagnosticosData: IDiagnosticos[] = [];

  constructor( private dataService: DiagnosticosService ) {
    this.dataService.getDiagnosticoData().subscribe((data: IDiagnosticosData) => {
      this.diagnosticosData = data.content;
      console.log(data); // Imprime los datos en la consola para verificar que se estan recibiendo
    });
  }

  ngOnInit() {
  }

}
