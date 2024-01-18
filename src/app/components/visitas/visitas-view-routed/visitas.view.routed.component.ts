import { Component, OnInit } from '@angular/core';
import { IVisitas, IVisitasData } from 'src/app/model/visitas.model';
import { VisitasService } from 'src/app/service/visitas.service';

@Component({
  selector: 'app-visitas-view-routed',
  templateUrl: 'visitas.view.routed.component.html',
  styleUrls: ['visitas.view.routed.component.css']
})
export class VisitasViewRoutedComponent implements OnInit{

visitasData: IVisitas[] = [];

constructor(private dataService: VisitasService) {
  this.dataService.getVisitasData().subscribe((data: IVisitasData) => {
    this.visitasData = data.content;
    console.log(data); // Imprime los datos en la consola para verificar que se estan recibiendo
  });
}

ngOnInit() {
}
}
