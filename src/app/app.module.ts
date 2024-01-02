import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de tener tu AppRoutingModule importado aquí
import { PacientesViewRoutedComponent } from './pacientes/pacientes-view-routed/pacientes.view.routed.component';
import { PacientesViewUnroutedComponent } from './pacientes/pacientes-view-unrouted/pacientes.view.unrouted.component';
import { VisitasViewRoutedComponent } from './visitas/visitas-view-routed/visitas.view.routed.component';
import { VisitasViewUnroutedComponent } from './visitas/visitas-view-unrouted/visitas.view.unrouted.component';
import { CalendarioViewRoutedComponent } from './calendario/calendario-view-routed/calendario.view.routed.component';
import { CalendarioViewUnroutedComponent } from './calendario/calendario-view-unrouted/calendario.view.unrouted.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    PacientesViewRoutedComponent,
    PacientesViewUnroutedComponent,
    VisitasViewRoutedComponent,
    VisitasViewUnroutedComponent,
    CalendarioViewRoutedComponent,
    CalendarioViewUnroutedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
