import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPacientes } from 'src/app/model/pacientes.model';
import { PacientesService } from 'src/app/service/pacientes.service';

@Component({
  selector: 'app-pacientes-edit-unrouted',
  templateUrl: './pacientes-edit-unrouted.component.html',
  styleUrls: ['./pacientes-edit-unrouted.component.css']
})
export class PacientesEditUnroutedComponent implements OnInit {

  pacienteForm: FormGroup;

  @Input()
  set paciente(paciente: IPacientes | undefined) {
    if (paciente) {
      this.pacienteForm.patchValue({
        id: paciente.id,
        codigo: paciente.codigo,
        //fnacimiento: paciente.fnacimiento,
        nombre: paciente.nombre,
        papellido: paciente.papellido,
        sapellido: paciente.sapellido,
        foto: paciente.foto,
        seguroMedico: paciente.seguroMedico.id
      });
    } else {
      this.pacienteForm.patchValue({
        id: 0,
        codigo: '',
        //fnacimiento: '',
        nombre: '',
        papellido: '',
        sapellido: '',
        foto: '',
        seguroMedico: { id: 0, companyia: '', descripcion: ''}
      });
    }
  }

  get paciente(): IPacientes {
    return this.paciente;
  }

  constructor(private fb: FormBuilder, private pacienteService: PacientesService, private router: Router) {
    this.pacienteForm = this.fb.group({
      id: [0, Validators.required],
      codigo: ['', Validators.required],
      fnacimiento: ['', Validators.required],
      nombre: ['', Validators.required],
      papellido: ['', Validators.required],
      sapellido: ['', Validators.required],
      foto: ['', Validators.required],
      seguroMedico: this.fb.group({
        id: [1, Validators.required],
        companyia: ['', Validators.required],
        descripcion: ['', Validators.required]
      })
    });
  }

  ngOnInit() {
    if (this.paciente) {
      this.pacienteForm.patchValue({
        id: this.paciente.id,
        codigo: this.paciente.codigo,
        //fnacimiento: this.paciente.fnacimiento,
        nombre: this.paciente.nombre,
        papellido: this.paciente.papellido,
        sapellido: this.paciente.sapellido,
        foto: this.paciente.foto,
        seguroMedico: this.paciente.seguroMedico.id
      });
    }
  }

  onSubmit() {
    if (this.pacienteForm.valid) {
      this.pacienteService.updatePaciente(this.pacienteForm.get('id')?.value, this.pacienteForm.value).subscribe({
        next: (data) => {
          console.log('Paciente actualizado');
          this.router.navigate(['/pacientes']);
        },
        error: (error) => {
          console.error('Error actualizando el paciente: ' + error);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
