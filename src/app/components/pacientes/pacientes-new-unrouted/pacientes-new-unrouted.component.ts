import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISeguroMedico } from 'src/app/model/seguromedico.model';
import { PacientesService } from 'src/app/service/pacientes.service';
import { SeguroMedicoService } from 'src/app/service/seguroMedico.service';

@Component({
  selector: 'app-pacientes-new-unrouted',
  templateUrl: './pacientes-new-unrouted.component.html',
  styleUrls: ['./pacientes-new-unrouted.component.css']
})
export class PacientesNewUnroutedComponent implements OnInit {

  paciente = {id: 0, codigo:'', fnacimiento:'', nombre:'', papellido:'', sapellido:'', foto:'', seguroMedico: {id: 0, companyia: '', descripcion: ''}};

  segurosMedicos: ISeguroMedico[] = [];

  constructor( private pacienteService: PacientesService, private router: Router, private seguroMedicoService: SeguroMedicoService ) { }

  ngOnInit() {
    this.getSegurosMedicos();
  }

  onSubmit() {
    console.log(this.paciente);
    this.pacienteService.createPaciente(this.paciente).subscribe(() => {
      this.router.navigate(['/pacientes']);
    });
  }

  getSegurosMedicos() {
    this.seguroMedicoService.getSeguroMedicoData().subscribe(data => {
      this.segurosMedicos = data.content; // Almacena la lista de seguros médicos en la variable segurosMedicos
    });
  }

}
