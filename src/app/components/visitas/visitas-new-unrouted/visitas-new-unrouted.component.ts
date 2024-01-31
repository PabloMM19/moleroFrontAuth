import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitasService } from 'src/app/service/visitas.service';

@Component({
  selector: 'app-visitas-new-unrouted',
  templateUrl: './visitas-new-unrouted.component.html',
  styleUrls: ['./visitas-new-unrouted.component.css']
})
export class VisitasNewUnroutedComponent implements OnInit {


  visita = {id:0, fecha: '', comentario:'', diagnostico_id:0, paciente_id:0};

  constructor( private visitasService: VisitasService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.visitasService.createVisita(this.visita).subscribe(() => {
      this.router.navigate(['/visitas']);
    });
  }

}
