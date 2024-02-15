import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-menuApp',
  templateUrl: './menuApp.component.html',
  styleUrls: ['./menuApp.component.css']
})
export class MenuAppComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { } // Inyecta el servicio SessionService

  ngOnInit() {
  }

  cerrarSesion() {
    this.sessionService.logout(); // Llama a la función logout del servicio SessionService
    this.router.navigate(['/login']); // Navega a la ruta /login
  }

}
