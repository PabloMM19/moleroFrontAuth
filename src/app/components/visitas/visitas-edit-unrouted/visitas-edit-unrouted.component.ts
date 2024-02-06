import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IVisitas } from 'src/app/model/visitas.model';
import { VisitasService } from 'src/app/service/visitas.service';

@Component({
  selector: 'app-visitas-edit-unrouted',
  templateUrl: './visitas-edit-unrouted.component.html',
  styleUrls: ['./visitas-edit-unrouted.component.css']
})
export class VisitasEditUnroutedComponent implements OnInit {


  visitaForm: FormGroup;

  @Input()
  set visita(visita: IVisitas | undefined) {
    if (visita) {
      this.visitaForm.patchValue({
        id: visita.id,
        fecha: visita.fecha,
        comentario: visita.comentario,
        paciente_id: visita.paciente,
        diagnostico: visita.diagnostico
      });
    } else {
      this.visitaForm.patchValue({
        id: 0,
        fecha: '',
        comentario: '',
        paciente: 0,
        diagnostico: 0
      });
    }
  }

  get visita(): IVisitas {
    return this.visita;
  }

  constructor(private fb: FormBuilder, private router: Router, private visitasService: VisitasService) {
    this.visitaForm = this.fb.group({
      id: [0, Validators.required],
      fecha: ['', Validators.required],
      comentario: ['', Validators.required],
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
      }),
      diagnostico: this.fb.group({
        id: [0, Validators.required],
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required]
      }),
    });
  }

  ngOnInit() {
    if (this.visita) {
      this.visitaForm.patchValue({
        id: this.visita.id,
        fecha: this.visita.fecha,
        comentario: this.visita.comentario,
        paciente: this.visita.paciente,
        diagnostico: this.visita.diagnostico
      });
    }
  }

  onSubmit() {
    if (this.visitaForm.valid) {
      this.visitasService.updateVisita(this.visitaForm.get('id')?.value, this.visitaForm.value).subscribe({
        next: (data) => {
          console.log('Visita actualizado');
          this.router.navigate(['/visitas']);
        },
        error: (error) => {
          console.error('Error actualizando la visita: ' + error);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}


