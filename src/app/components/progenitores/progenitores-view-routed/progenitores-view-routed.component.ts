import { Component, OnInit } from '@angular/core';
import { IProgenitores, IProgenitoresData } from 'src/app/model/progenitores.model';
import { ProgenitoresService } from 'src/app/service/progenitores.service';

@Component({
  selector: 'app-progenitores-view-routed',
  templateUrl: './progenitores-view-routed.component.html',
  styleUrls: ['./progenitores-view-routed.component.css']
})
export class ProgenitoresViewRoutedComponent implements OnInit {

progenitoresData: IProgenitores[] = [];

constructor(private dataService: ProgenitoresService) {
  this.dataService.getProgenitorData().subscribe((data: IProgenitoresData) => {
    this.progenitoresData = data.content;
    console.log(data); // Imprime los datos en la consola para verificar que se estan recibiendo
  });
}

ngOnInit() {
}

}
