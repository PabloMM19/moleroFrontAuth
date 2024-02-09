import { DiagnosticosNewUnroutedComponent } from './components/diagnosticos/diagnosticos-new-unrouted/diagnosticos-new-unrouted.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { DiagnosticoViewUnroutedComponent } from './components/diagnosticos/diagnostico-view-unrouted/diagnostico-view-unrouted.component';
import { MedicacionViewRoutedComponent } from './components/medicacion/medicacion-view-routed/medicacion-view-routed.component';
import { MedicacionViewUnroutedComponent } from './components/medicacion/medicacion-view-unrouted/medicacion-view-unrouted.component';
import { MedidasViewRoutedComponent } from './components/medidas/medidas-view-routed/medidas-view-routed.component';
import { MedidasViewUnroutedComponent } from './components/medidas/medidas-view-unrouted/medidas-view-unrouted.component';
import { ProgenitoresViewRoutedComponent } from './components/progenitores/progenitores-view-routed/progenitores-view-routed.component';
import { ProgenitoresViewUnroutedComponent } from './components/progenitores/progenitores-view-unrouted/progenitores-view-unrouted.component';
import { PruebasViewRoutedComponent } from './components/pruebas/pruebas-view-routed/pruebas-view-routed.component';
import { PruebasViewUnroutedComponent } from './components/pruebas/pruebas-view-unrouted/pruebas-view-unrouted.component';
import { SeguromedicoViewRoutedComponent } from './components/seguromedico/seguromedico-view-routed/seguromedico-view-routed.component';
import { SeguromedicoViewUnroutedComponent } from './components/seguromedico/seguromedico-view-unrouted/seguromedico-view-unrouted.component';
import { MenuAppComponent } from './components/shared/header/menuApp/menuApp.component';
import { FooterAppComponent } from './components/shared/footer/footerApp/footerApp.component';
import { PacientesNewRoutedComponent } from './components/pacientes/pacientes-new-routed/pacientes-new-routed.component';
import { PacientesNewUnroutedComponent } from './components/pacientes/pacientes-new-unrouted/pacientes-new-unrouted.component';
import { PacientesEditRoutedComponent } from './components/pacientes/pacientes-edit-routed/pacientes-edit-routed.component';
import { PacientesEditUnroutedComponent } from './components/pacientes/pacientes-edit-unrouted/pacientes-edit-unrouted.component';
import { DiagnosticosEditRoutedComponent } from './components/diagnosticos/diagnosticos-edit-routed/diagnosticos-edit-routed.component';
import { DiagnosticosEditUnroutedComponent } from './components/diagnosticos/diagnosticos-edit-unrouted/diagnosticos-edit-unrouted.component';
import { DiagnosticosNewRoutedComponent } from './components/diagnosticos/diagnosticos-new-routed/diagnosticos-new-routed.component';
import { MedicacionEditRoutedComponent } from './components/medicacion/medicacion-edit-routed/medicacion-edit-routed.component';
import { MedicacionEditUnroutedComponent } from './components/medicacion/medicacion-edit-unrouted/medicacion-edit-unrouted.component';
import { MedicacionNewRoutedComponent } from './components/medicacion/medicacion-new-routed/medicacion-new-routed.component';
import { MedicacionNewUnroutedComponent } from './components/medicacion/medicacion-new-unrouted/medicacion-new-unrouted.component';
import { MedidasEditRoutedComponent } from './components/medidas/medidas-edit-routed/medidas-edit-routed.component';
import { MedidasEditUnroutedComponent } from './components/medidas/medidas-edit-unrouted/medidas-edit-unrouted.component';
import { MedidasNewRoutedComponent } from './components/medidas/medidas-new-routed/medidas-new-routed.component';
import { MedidasNewUnroutedComponent } from './components/medidas/medidas-new-unrouted/medidas-new-unrouted.component';
import { ProgenitoresEditRoutedComponent } from './components/progenitores/progenitores-edit-routed/progenitores-edit-routed.component';
import { ProgenitoresNewRoutedComponent } from './components/progenitores/progenitores-new-routed/progenitores-new-routed.component';
import { ProgenitoresEditUnroutedComponent } from './components/progenitores/progenitores-edit-unrouted/progenitores-edit-unrouted.component';
import { ProgenitoresNewUnroutedComponent } from './components/progenitores/progenitores-new-unrouted/progenitores-new-unrouted.component';
import { VisitasNewRoutedComponent } from './components/visitas/visitas-new-routed/visitas-new-routed.component';
import { VisitasNewUnroutedComponent } from './components/visitas/visitas-new-unrouted/visitas-new-unrouted.component';
import { VisitasEditRoutedComponent } from './components/visitas/visitas-edit-routed/visitas-edit-routed.component';
import { VisitasEditUnroutedComponent } from './components/visitas/visitas-edit-unrouted/visitas-edit-unrouted.component';
import { PruebasNewRoutedComponent } from './components/pruebas/pruebas-new-routed/pruebas-new-routed.component';
import { PruebasNewUnroutedComponent } from './components/pruebas/pruebas-new-unrouted/pruebas-new-unrouted.component';
import { PruebasEditRoutedComponent } from './components/pruebas/pruebas-edit-routed/pruebas-edit-routed.component';
import { PruebasEditUnroutedComponent } from './components/pruebas/pruebas-edit-unrouted/pruebas-edit-unrouted.component';
import { PacientesDetailRoutedComponent } from './components/pacientes/pacientes-detail-routed/pacientes-detail-routed.component';
import { PacientesDetailUnroutedComponent } from './components/pacientes/pacientes-detail-unrouted/pacientes-detail-unrouted.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgenitoresDetailRoutedComponent } from './components/progenitores/progenitores-detail-routed/progenitores-detail-routed.component';
import { ProgenitoresDetailUnroutedComponent } from './components/progenitores/progenitores-detail-unrouted/progenitores-detail-unrouted.component';
import { PacientesPercentilesViewRoutedComponent } from './components/pacientes/pacientes-percentiles-view-routed/pacientes-percentiles-view-routed.component';
import { PacientesPercentilesViewUnroutedComponent } from './components/pacientes/pacientes-percentiles-view-unrouted/pacientes-percentiles-view-unrouted.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VisitasmedicacionViewRoutedComponent } from './components/visitasmedicacion/visitasmedicacion-view-routed/visitasmedicacion-view-routed.component';
import { VisitasmedicacionViewUnroutedComponent } from './components/visitasmedicacion/visitasmedicacion-view-unrouted/visitasmedicacion-view-unrouted.component';
import { VisitaspruebasViewRoutedComponent } from './components/visitaspruebas/visitaspruebas-view-routed/visitaspruebas-view-routed.component';
import { VisitaspruebasViewUnroutedComponent } from './components/visitaspruebas/visitaspruebas-view-unrouted/visitaspruebas-view-unrouted.component';
import { LoginViewRoutedComponent } from './components/shared/login/login-view-routed/login-view-routed.component';
import { LoginViewUnroutedComponent } from './components/shared/login/login-view-unrouted/login-view-unrouted.component';
import { VisitaspruebasService } from './service/visitaspruebas.service';
import { VisitasBypacienteViewRoutedComponent } from './components/visitas/visitas-bypaciente-view-routed/visitas-bypaciente-view-routed.component';
import { VisitasBypacienteViewUnroutedComponent } from './components/visitas/visitas-bypaciente-view-unrouted/visitas-bypaciente-view-unrouted.component';

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
    DiagnosticoViewUnroutedComponent,
    MedicacionViewRoutedComponent,
    MedicacionViewUnroutedComponent,
    MedidasViewRoutedComponent,
    MedidasViewUnroutedComponent,
    ProgenitoresViewRoutedComponent,
    ProgenitoresViewUnroutedComponent,
    PruebasViewRoutedComponent,
    PruebasViewUnroutedComponent,
    SeguromedicoViewRoutedComponent,
    SeguromedicoViewUnroutedComponent,
    MenuAppComponent,
    FooterAppComponent,
    PacientesNewRoutedComponent,
    PacientesNewUnroutedComponent,
    PacientesEditRoutedComponent,
    PacientesEditUnroutedComponent,
    DiagnosticosEditRoutedComponent,
    DiagnosticosEditUnroutedComponent,
    DiagnosticosNewRoutedComponent,
    DiagnosticosNewUnroutedComponent,
    MedicacionEditRoutedComponent,
    MedicacionEditUnroutedComponent,
    MedicacionNewRoutedComponent,
    MedicacionNewUnroutedComponent,
    MedidasEditRoutedComponent,
    MedidasEditUnroutedComponent,
    MedidasNewRoutedComponent,
    MedidasNewUnroutedComponent,
    ProgenitoresEditRoutedComponent,
    ProgenitoresNewRoutedComponent,
    ProgenitoresEditUnroutedComponent,
    ProgenitoresNewUnroutedComponent,
    VisitasNewRoutedComponent,
    VisitasNewUnroutedComponent,
    VisitasEditRoutedComponent,
    VisitasEditUnroutedComponent,
    PruebasNewRoutedComponent,
    PruebasNewUnroutedComponent,
    PruebasEditRoutedComponent,
    PruebasEditUnroutedComponent,
    PacientesDetailRoutedComponent,
    PacientesDetailUnroutedComponent,
    ProgenitoresDetailRoutedComponent,
    ProgenitoresDetailUnroutedComponent,
    PacientesPercentilesViewRoutedComponent,
    PacientesPercentilesViewUnroutedComponent,
    VisitasmedicacionViewRoutedComponent,
    VisitasmedicacionViewUnroutedComponent,
    VisitaspruebasViewRoutedComponent,
    VisitaspruebasViewUnroutedComponent,
    LoginViewRoutedComponent,
    LoginViewUnroutedComponent,
    VisitasBypacienteViewRoutedComponent,
    VisitasBypacienteViewUnroutedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
   // Ng2SearchPipeModule
  ],
  providers: [VisitaspruebasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
