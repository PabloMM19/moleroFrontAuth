import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-pacientes-percentiles-view-unrouted',
  templateUrl: './pacientes-percentiles-view-unrouted.component.html',
  styleUrls: ['./pacientes-percentiles-view-unrouted.component.css']
})
export class PacientesPercentilesViewUnroutedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
