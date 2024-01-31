import { PruebasEditRoutedComponent } from './../pruebas-edit-routed/pruebas-edit-routed.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPruebas } from 'src/app/model/pruebas.model';
import { PruebasService } from 'src/app/service/pruebas.service';

@Component({
  selector: 'app-pruebas-edit-unrouted',
  templateUrl: './pruebas-edit-unrouted.component.html',
  styleUrls: ['./pruebas-edit-unrouted.component.css']
})
export class PruebasEditUnroutedComponent implements OnInit {

  pruebaForm: FormGroup;

  @Input()
  set prueba(prueba: IPruebas | undefined) {
    if (prueba) {
      this.pruebaForm.patchValue({
        id: prueba.id,
        nombre: prueba.nombre,
        descripcion: prueba.descripcion,
      });
    } else {
      this.pruebaForm.patchValue({
        id: 0,
        nombre: '',
        descripcion: '',
      });
    }
  }

  get prueba(): IPruebas {
    return this.prueba;
  }

  constructor(private fb: FormBuilder, private router: Router, private pruebasService: PruebasService) {
    this.pruebaForm = this.fb.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.prueba) {
      this.pruebaForm.patchValue({
        id: this.prueba.id,
        nombre: this.prueba.nombre,
        descripcion: this.prueba.descripcion,
      });
    }
  }

  onSubmit() {
    if (this.pruebaForm.valid) {
      this.pruebasService.updatePrueba(this.pruebaForm.get('id')?.value, this.pruebaForm.value).subscribe({
        next: (data) => {
          console.log('Prueba actualizada');
          this.router.navigate(['/pruebas']);
        },
        error: (error) => {
          console.error('Error actualizando la prueba: ' + error);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
