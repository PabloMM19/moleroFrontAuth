import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicacionService } from 'src/app/service/medicacion.service';

@Component({
  selector: 'app-medicacion-new-unrouted',
  templateUrl: './medicacion-new-unrouted.component.html',
  styleUrls: ['./medicacion-new-unrouted.component.css']
})
export class MedicacionNewUnroutedComponent implements OnInit {

  medicacion = { id: 1, nombre: '', descripcion: '', medida_id: 1 };

  constructor(private medicacionService: MedicacionService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.medicacionService.createMedicacion(this.medicacion).subscribe(() => {
      this.router.navigate(['/medicaciones']);
    });
  }

}
