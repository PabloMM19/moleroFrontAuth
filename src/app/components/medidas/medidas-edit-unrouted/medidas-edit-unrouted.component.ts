import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMedidas } from 'src/app/model/medida.model';
import { MedidasService } from 'src/app/service/medidas.service';

@Component({
  selector: 'app-medidas-edit-unrouted',
  templateUrl: './medidas-edit-unrouted.component.html',
  styleUrls: ['./medidas-edit-unrouted.component.css']
})
export class MedidasEditUnroutedComponent implements OnInit {

  medidaForm: FormGroup;

  @Input()
  set medida(medida: IMedidas | undefined) {
    if (medida) {
      this.medidaForm.patchValue({
        id: medida.id,
        nombre: medida.nombre
      });
    } else {
      this.medidaForm.patchValue({
        id: 0,
        nombre: ''
      });
    }
  }

  get medida(): IMedidas {
    return this.medida;
  }

  constructor(private fb: FormBuilder, private medidaService: MedidasService, private router: Router) {
    this.medidaForm = this.fb.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.medida) {
      this.medidaForm.patchValue({
        id: this.medida.id,
        nombre: this.medida.nombre
      });
    }
  }

  onSubmit() {
    if (this.medidaForm.valid) {
      this.medidaService.updateMedida(this.medidaForm.get('id')?.value, this.medidaForm.value).subscribe({
        next: (data) => {
          console.log('medida actualizado');
          this.router.navigate(['/medidas']);
        },
        error: (error) => {
          console.error('Error actualizando el medida: ' + error);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
