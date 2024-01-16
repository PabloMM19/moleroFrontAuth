import { Component, OnInit } from '@angular/core';
import { IPruebas, IPruebasData } from 'src/app/model/pruebas.model';
import { PruebasService } from 'src/app/service/pruebas.service';

@Component({
  selector: 'app-pruebas-view-routed',
  templateUrl: './pruebas-view-routed.component.html',
  styleUrls: ['./pruebas-view-routed.component.css']
})
export class PruebasViewRoutedComponent implements OnInit {

pruebasData: IPruebas[] = [];

constructor(private dataService: PruebasService) {
  this.dataService.getPruebasData().subscribe((data: IPruebasData) => {
    this.pruebasData = data.content;
    console.log(data); // Imprime los datos en la consola para verificar que se estan recibiendo
  });
}

ngOnInit() {
}

}
