import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProgenitores } from 'src/app/model/progenitores.model';
import { ProgenitoresService } from 'src/app/service/progenitores.service';

@Component({
  selector: 'app-progenitores-detail-unrouted',
  templateUrl: './progenitores-detail-unrouted.component.html',
  styleUrls: ['./progenitores-detail-unrouted.component.css']
})
export class ProgenitoresDetailUnroutedComponent implements OnInit {

  @Input() id: number = 6;
  progenitor: IProgenitores = {} as IProgenitores;
  status: HttpErrorResponse | null = null;

  constructor( private progenitoresService: ProgenitoresService,  private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.id);
    this.getOneProgenitor();
  }

  getOneProgenitor() {
    this.progenitoresService.getOneProgenitor(this.id).subscribe({
      next: (data: IProgenitores) => {
        console.log('Data del servicio:', data);
        this.progenitor = data;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }

    })
  }

}
