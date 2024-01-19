import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticosService } from 'src/app/service/diagnosticos.service';

@Component({
  selector: 'app-diagnosticos-new-unrouted',
  templateUrl: './diagnosticos-new-unrouted.component.html',
  styleUrls: ['./diagnosticos-new-unrouted.component.css']
})
export class DiagnosticosNewUnroutedComponent implements OnInit {

diagnostico = {id:17, nombre:'sfg', descripcion:'sdg'};

  constructor( private diagnosticoService: DiagnosticosService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.diagnosticoService.createDiagnostico(this.diagnostico).subscribe(
      (response) => {
        console.log(response); // Muestra la respuesta del servidor en la consola
        this.router.navigate(['/diagnosticos']);
      },
      (error) => {
        console.error(error); // Muestra cualquier error en la consola
      }
    );
  }

}
