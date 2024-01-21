import { Component, OnInit } from '@angular/core';
import { IMedidas, IMedidasData } from 'src/app/model/medida.model';
import { MedidasService } from 'src/app/service/medidas.service';

@Component({
  selector: 'app-medidas-view-routed',
  templateUrl: './medidas-view-routed.component.html',
  styleUrls: ['./medidas-view-routed.component.css']
})
export class MedidasViewRoutedComponent implements OnInit {

  medidasData: IMedidas[] = [];

  constructor(private dataService: MedidasService) {
    this.dataService.getMedidaData().subscribe((data: IMedidasData) => {
      this.medidasData = data.content;
      console.log(data); // Imprime los datos en la consola para verificar que se estan recibiendo
    });
  }

  ngOnInit() {
  }

}
