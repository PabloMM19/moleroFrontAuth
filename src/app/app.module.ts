import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './components/home/admin-home/admin-home.component';
import { AppRoutingModule } from './app-routing.module';
import { PacientesViewRoutedComponent } from './components/pacientes/pacientes-view-routed/pacientes.view.routed.component';
import { PacientesViewUnroutedComponent } from './components/pacientes/pacientes-view-unrouted/pacientes.view.unrouted.component';
import { VisitasViewRoutedComponent } from './components/visitas/visitas-view-routed/visitas.view.routed.component';
import { VisitasViewUnroutedComponent } from './components/visitas/visitas-view-unrouted/visitas.view.unrouted.component';
import { CalendarioViewRoutedComponent } from './components/calendario/calendario-view-routed/calendario.view.routed.component';
import { CalendarioViewUnroutedComponent } from './components/calendario/calendario-view-unrouted/calendario.view.unrouted.component';
import { DiagnosticoViewRoutedComponent } from './components/diagnosticos/diagnostico-view-routed/diagnostico-view-routed.component';
import { DiagnosticoViewUnroutedComponent } from './components/diagnosticos/disgnostico-view-unrouted/diagnostico-view-unrouted.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    PacientesViewRoutedComponent,
    PacientesViewUnroutedComponent,
    VisitasViewRoutedComponent,
    VisitasViewUnroutedComponent,
    CalendarioViewRoutedComponent,
    CalendarioViewUnroutedComponent,
    DiagnosticoViewRoutedComponent,
    DiagnosticoViewUnroutedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
