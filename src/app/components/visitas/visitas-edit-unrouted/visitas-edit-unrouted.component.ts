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
        paciente_id: visita.paciente_id,
        diagnostico_id: visita.diagnostico_id
      });
    } else {
      this.visitaForm.patchValue({
        id: 0,
        fecha: '',
        comentario: '',
        paciente_id: 0,
        diagnostico_id: 0
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
      paciente_id: [0, Validators.required],
      diagnostico_id: [0, Validators.required]
    });
  }

  ngOnInit() {
    if (this.visita) {
      this.visitaForm.patchValue({
        id: this.visita.id,
        fecha: this.visita.fecha,
        comentario: this.visita.comentario,
        paciente_id: this.visita.paciente_id,
        diagnostico_id: this.visita.diagnostico_id
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


