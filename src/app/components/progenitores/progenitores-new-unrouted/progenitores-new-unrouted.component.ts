import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgenitoresService } from 'src/app/service/progenitores.service';

@Component({
  selector: 'app-progenitores-new-unrouted',
  templateUrl: './progenitores-new-unrouted.component.html',
  styleUrls: ['./progenitores-new-unrouted.component.css']
})
export class ProgenitoresNewUnroutedComponent implements OnInit {

progenitor = {id: 0, dni: '', nombre: '', papellido: '', sapellido: '', rol: 0, paciente_id: 0};

  constructor( private progenitorService: ProgenitoresService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.progenitorService.createProgenitor(this.progenitor).subscribe(() => {
      this.router.navigate(['/progenitores']);
    });
  }

}
