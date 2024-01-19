import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDiagnosticos } from 'src/app/model/diagnosticos.model';
import { DiagnosticosService } from 'src/app/service/diagnosticos.service';

@Component({
  selector: 'app-diagnosticos-edit-unrouted',
  templateUrl: './diagnosticos-edit-unrouted.component.html',
  styleUrls: ['./diagnosticos-edit-unrouted.component.css']
})
export class DiagnosticosEditUnroutedComponent implements OnInit {

  diagnosticoForm: FormGroup;

  @Input()
  set diagnostico(diagnostico: IDiagnosticos | undefined) {
    if (diagnostico) {
      this.diagnosticoForm.patchValue({
        id: diagnostico.id,
        nombre: diagnostico.nombre,
        descripcion: diagnostico.descripcion,
      });
    } else {
      this.diagnosticoForm.patchValue({
        id: 0,
        nombre: '',
        descripcion: '',
      });
    }
  }

  get diagnostico(): IDiagnosticos {
    return this.diagnostico;
  }


  constructor(private fb: FormBuilder, private diagnosticoService: DiagnosticosService, private router: Router) {
    this.diagnosticoForm = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.diagnostico) {
      this.diagnosticoForm.patchValue({
        id: this.diagnostico.id,
        nombre: this.diagnostico.nombre,
        descripcion: this.diagnostico.descripcion,
      });

    }
  }

  onSubmit() {
    if (this.diagnosticoForm.valid) {
      this.diagnosticoService.updateDiagnostico(this.diagnosticoForm.get('id')?.value, this.diagnosticoForm.value).subscribe({
        next: (data) => {
          console.log('Diagnostico actualizado');
          this.router.navigate(['/diagnosticos']);
        },
        error: (error) => {
          console.error('Error actualizando el diagnostico: ' + error);
        }
      });
    } else {
      console.error('El formulario no es válido.');
    }
  }

}
