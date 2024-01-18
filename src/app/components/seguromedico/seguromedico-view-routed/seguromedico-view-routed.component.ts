import { Component, OnInit } from '@angular/core';
import { ISeguroMedico, ISeguroMedicoData } from 'src/app/model/seguromedico.model';
import { SeguroMedicoService } from 'src/app/service/seguroMedico.service';

@Component({
  selector: 'app-seguromedico-view-routed',
  templateUrl: './seguromedico-view-routed.component.html',
  styleUrls: ['./seguromedico-view-routed.component.css']
})
export class SeguromedicoViewRoutedComponent implements OnInit {

segurosMedicosData: ISeguroMedico[] = [];

constructor(private dataService: SeguroMedicoService) {
  this.dataService.getSeguroMedicoData().subscribe((data: ISeguroMedicoData) => {
    this.segurosMedicosData = data.content;
    console.log(data); // Imprime los datos en la consola para verificar que se estan recibiendo
  });
}

  ngOnInit() {
  }

}
