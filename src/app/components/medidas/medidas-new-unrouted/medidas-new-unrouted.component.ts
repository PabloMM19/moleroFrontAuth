import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedidasService } from 'src/app/service/medidas.service';

@Component({
  selector: 'app-medidas-new-unrouted',
  templateUrl: './medidas-new-unrouted.component.html',
  styleUrls: ['./medidas-new-unrouted.component.css']
})
export class MedidasNewUnroutedComponent implements OnInit {

medida = {id: 0, nombre: ''};

  constructor( private medidaService: MedidasService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.medidaService.createMedida(this.medida).subscribe(() => {
      this.router.navigate(['/medidas']);
    });
  }

}
