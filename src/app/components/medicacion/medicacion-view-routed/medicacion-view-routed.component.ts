import { Component, OnInit } from '@angular/core';
import { IMedicacion, IMedicacionData } from 'src/app/model/medicacion.model';
import { MedicacionService } from 'src/app/service/medicacion.service';

@Component({
  selector: 'app-medicacion-view-routed',
  templateUrl: './medicacion-view-routed.component.html',
  styleUrls: ['./medicacion-view-routed.component.css']
})
export class MedicacionViewRoutedComponent implements OnInit {

  medicacionData: IMedicacion[] = [];

  constructor(private dataService: MedicacionService) {
    this.dataService.getMedicacionData().subscribe((data: IMedicacionData) => {
      this.medicacionData = data.content;
      console.log(data); // Imprime los datos en la consola para verificar que se estan recibiendo
    });
  }

  ngOnInit() {
  }

}
