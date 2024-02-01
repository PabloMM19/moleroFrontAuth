import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/service/pacientes.service';

@Component({
  selector: 'app-pacientes-new-unrouted',
  templateUrl: './pacientes-new-unrouted.component.html',
  styleUrls: ['./pacientes-new-unrouted.component.css']
})
export class PacientesNewUnroutedComponent implements OnInit {

  paciente = {id: 0, codigo:'', fnacimiento:'', nombre:'', papellido:'', sapellido:'', foto:'', seguromedico_id:0};
  

  constructor( private pacienteService: PacientesService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.pacienteService.createPaciente(this.paciente).subscribe(() => {
      this.router.navigate(['/pacientes']);
    });
  }

}
