import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMedicacion } from 'src/app/model/medicacion.model';
import { MedicacionService } from 'src/app/service/medicacion.service';

@Component({
  selector: 'app-medicacion-edit-unrouted',
  templateUrl: './medicacion-edit-unrouted.component.html',
  styleUrls: ['./medicacion-edit-unrouted.component.css']
})
export class MedicacionEditUnroutedComponent implements OnInit {

  medicacionForm: FormGroup;

  @Input()
  set medicacion(medicacion: IMedicacion | undefined) {
    if (medicacion) {
      this.medicacionForm.patchValue({
        id: medicacion.id,
        nombre: medicacion.nombre,
        papellido: medicacion.descripcion,
        seguromedico_id: medicacion.medida_id
      });
    } else {
      this.medicacionForm.patchValue({
        id: 0,
        nombre: '',
        descripcion: '',
        medida_id: 0
      });
    }
  }

  get medicacion(): IMedicacion {
    return this.medicacionForm.value;
  }

  constructor(private fb: FormBuilder, private medicacionService: MedicacionService, private router: Router) {
    this.medicacionForm = this.fb.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      medida_id: [1, Validators.required]
    });
  }

  ngOnInit() {
    if (this.medicacion) {
      this.medicacionForm.patchValue({
        id: this.medicacion.id,
        nombre: this.medicacion.nombre,
        descripcion: this.medicacion.descripcion,
        medida_id: this.medicacion.medida_id
      });
    }
  }

  onSubmit() {
    if (this.medicacionForm.valid) {
      this.medicacionService.updateMedicacion(this.medicacionForm.get('id')?.value, this.medicacionForm.value).subscribe({
        next: (data) => {
          console.log('Medicacion actualizado');
          this.router.navigate(['/medicaciones']);
        },
        error: (error) => {
          console.error('Error actualizando la medicacion: ' + error);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
