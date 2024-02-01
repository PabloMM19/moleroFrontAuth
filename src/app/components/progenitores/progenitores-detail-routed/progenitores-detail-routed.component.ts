import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-progenitores-detail-routed',
  templateUrl: './progenitores-detail-routed.component.html',
  styleUrls: ['./progenitores-detail-routed.component.css']
})
export class ProgenitoresDetailRoutedComponent implements OnInit {

  id: number = 6;

  constructor( private route: ActivatedRoute ) {
    this.id = parseInt(this.route.snapshot.paramMap.get("id") || "6");
  }

  ngOnInit() {
  }

}
