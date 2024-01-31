import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PruebasService } from 'src/app/service/pruebas.service';

@Component({
  selector: 'app-pruebas-new-unrouted',
  templateUrl: './pruebas-new-unrouted.component.html',
  styleUrls: ['./pruebas-new-unrouted.component.css']
})
export class PruebasNewUnroutedComponent implements OnInit {

  prueba = {id: 0, nombre: '', descripcion: ''};

  constructor( private pruebasService: PruebasService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.pruebasService.createPrueba(this.prueba).subscribe(() => {
      this.router.navigate(['/pruebas']);
    });
  }

}
