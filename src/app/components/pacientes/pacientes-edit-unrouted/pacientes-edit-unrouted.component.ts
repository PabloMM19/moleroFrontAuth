import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPacientes } from 'src/app/model/pacientes.model';
import { ISeguroMedico } from 'src/app/model/seguromedico.model';
import { PacientesService } from 'src/app/service/pacientes.service';
import { SeguroMedicoService } from 'src/app/service/seguroMedico.service';

@Component({
  selector: 'app-pacientes-edit-unrouted',
  templateUrl: './pacientes-edit-unrouted.component.html',
  styleUrls: ['./pacientes-edit-unrouted.component.css']
})
export class PacientesEditUnroutedComponent implements OnInit {

  pacienteForm: FormGroup;
  segurosMedicos: ISeguroMedico[] = [];

  @Input() paciente: IPacientes | undefined;

  constructor(private fb: FormBuilder, private pacienteService: PacientesService, private router: Router, private seguroMedicoService: SeguroMedicoService) {
    this.pacienteForm = this.fb.group({
      id: [0, Validators.required],
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      papellido: ['', Validators.required],
      sapellido: ['', Validators.required],
      foto: ['', Validators.required],
      seguroMedico: ['', Validators.required] // Deja el campo seguroMedico vacío inicialmente
    });
  }

  ngOnInit() {
    this.getSegurosMedicos(); // Llama a la función para cargar los seguros médicos
  }

  getSegurosMedicos() {
    this.seguroMedicoService.getSeguroMedicoData().subscribe(data => {
      this.segurosMedicos = data.content; // Almacena la lista de seguros médicos en la variable segurosMedicos

      if (this.paciente) {
        this.pacienteForm.patchValue({
          id: this.paciente.id,
          codigo: this.paciente.codigo,
          //fnacimiento: this.paciente.fnacimiento,
          nombre: this.paciente.nombre,
          papellido: this.paciente.papellido,
          sapellido: this.paciente.sapellido,
          foto: this.paciente.foto,
          seguroMedico: this.paciente.seguroMedico.id.toString() // Asigna el ID del seguro médico como una cadena
        });
      }
    });
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
      // Imprimir los mensajes de error de validación en la consola
      for (const key in this.pacienteForm.controls) {
        if (this.pacienteForm.controls[key].invalid) {
          console.log('Campo', key, 'inválido');
          console.log('Errores:', this.pacienteForm.controls[key].errors);
        }
      }
    }
  }

}
