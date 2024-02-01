import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pacientes-detail-routed',
  templateUrl: './pacientes-detail-routed.component.html',
  styleUrls: ['./pacientes-detail-routed.component.css']
})
export class PacientesDetailRoutedComponent implements OnInit {

  id: number = 6;

  constructor( private route: ActivatedRoute ) {
    this.id = parseInt(this.route.snapshot.paramMap.get("id") || "6");
  }

  ngOnInit() {
  }

}
