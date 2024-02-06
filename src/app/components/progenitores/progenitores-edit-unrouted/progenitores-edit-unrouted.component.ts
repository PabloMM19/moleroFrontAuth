import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProgenitores } from 'src/app/model/progenitores.model';
import { ProgenitoresService } from 'src/app/service/progenitores.service';

@Component({
  selector: 'app-progenitores-edit-unrouted',
  templateUrl: './progenitores-edit-unrouted.component.html',
  styleUrls: ['./progenitores-edit-unrouted.component.css']
})
export class ProgenitoresEditUnroutedComponent implements OnInit {


  progenitorForm: FormGroup;

  @Input()
  set progenitor(progenitor: IProgenitores | undefined) {
    if (progenitor) {
      this.progenitorForm.patchValue({
        id: progenitor.id,
        nombre: progenitor.nombre,
        papellido: progenitor.papellido,
        sapellido: progenitor.sapellido,
        dni: progenitor.dni,
        rol: progenitor.rol,
        paciente: progenitor.paciente
      });
    } else {
      this.progenitorForm.patchValue({
        id: 0,
        nombre: '',
        papellido: '',
        sapellido: '',
        dni: '',
        rol: 0,
        paciente: 0
      })
    }
  }

  get progenitor(): IProgenitores {
    return this.progenitor;
  }

  constructor(private fb: FormBuilder, private router: Router, private progenitoresService: ProgenitoresService) {
    this.progenitorForm = this.fb.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required],
      papellido: ['', Validators.required],
      sapellido: ['', Validators.required],
      dni: ['', Validators.required],
      rol: [0, Validators.required],
      paciente: this.fb.group({
        id: [0, Validators.required],
        codigo: ['', Validators.required],
        nombre: ['', Validators.required],
        papellido: ['', Validators.required],
        sapellido: ['', Validators.required],
        foto: ['', Validators.required],
        seguroMedico: this.fb.group({
          id: [0, Validators.required],
          companyia: ['', Validators.required],
          descripcion: ['', Validators.required]
        })
      })
    });
  }
  

  ngOnInit() {
    if (this.progenitor) {
      this.progenitorForm.patchValue({
        id: this.progenitor.id,
        nombre: this.progenitor.nombre,
        papellido: this.progenitor.papellido,
        sapellido: this.progenitor.sapellido,
        dni: this.progenitor.dni,
        rol: this.progenitor.rol,
        paciente: this.progenitor.paciente
      });
    }
  }

  onSubmit() {
    if (this.progenitorForm.valid) {
      this.progenitoresService.updateProgenitor(this.progenitorForm.get('id')?.value, this.progenitorForm.value).subscribe({
        next: (data) => {
          console.log('Progenitor actualizado');
          this.router.navigate(['/progenitores']);
        },
        error: (error) => {
          console.error('Error actualizando el progenitor: ' + error);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}


