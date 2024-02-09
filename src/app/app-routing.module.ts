import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./components/home/admin-home/admin-home.component";
import { PacientesViewRoutedComponent } from "./components/pacientes/pacientes-view-routed/pacientes.view.routed.component";
import { VisitasViewRoutedComponent } from "./components/visitas/visitas-view-routed/visitas.view.routed.component";
import { CalendarioViewRoutedComponent } from "./components/calendario/calendario-view-routed/calendario.view.routed.component";
import { DiagnosticoViewRoutedComponent } from "./components/diagnosticos/diagnostico-view-routed/diagnostico-view-routed.component";
import { MedicacionViewRoutedComponent } from "./components/medicacion/medicacion-view-routed/medicacion-view-routed.component";
import { MedidasViewRoutedComponent } from "./components/medidas/medidas-view-routed/medidas-view-routed.component";
import { ProgenitoresViewRoutedComponent } from "./components/progenitores/progenitores-view-routed/progenitores-view-routed.component";
import { PruebasViewRoutedComponent } from "./components/pruebas/pruebas-view-routed/pruebas-view-routed.component";
import { SeguromedicoViewRoutedComponent } from "./components/seguromedico/seguromedico-view-routed/seguromedico-view-routed.component";
import { PacientesNewRoutedComponent } from "./components/pacientes/pacientes-new-routed/pacientes-new-routed.component";
import { PacientesEditRoutedComponent } from "./components/pacientes/pacientes-edit-routed/pacientes-edit-routed.component";
import { DiagnosticosNewRoutedComponent } from "./components/diagnosticos/diagnosticos-new-routed/diagnosticos-new-routed.component";
import { DiagnosticosEditRoutedComponent } from "./components/diagnosticos/diagnosticos-edit-routed/diagnosticos-edit-routed.component";
import { MedicacionNewRoutedComponent } from "./components/medicacion/medicacion-new-routed/medicacion-new-routed.component";
import { MedicacionEditRoutedComponent } from "./components/medicacion/medicacion-edit-routed/medicacion-edit-routed.component";
import { MedidasNewRoutedComponent } from "./components/medidas/medidas-new-routed/medidas-new-routed.component";
import { MedidasEditRoutedComponent } from "./components/medidas/medidas-edit-routed/medidas-edit-routed.component";
import { ProgenitoresNewRoutedComponent } from "./components/progenitores/progenitores-new-routed/progenitores-new-routed.component";
import { ProgenitoresEditRoutedComponent } from "./components/progenitores/progenitores-edit-routed/progenitores-edit-routed.component";
import { VisitasEditRoutedComponent } from "./components/visitas/visitas-edit-routed/visitas-edit-routed.component";
import { VisitasNewRoutedComponent } from "./components/visitas/visitas-new-routed/visitas-new-routed.component";
import { PruebasNewRoutedComponent } from "./components/pruebas/pruebas-new-routed/pruebas-new-routed.component";
import { PruebasEditRoutedComponent } from "./components/pruebas/pruebas-edit-routed/pruebas-edit-routed.component";
import { PacientesDetailRoutedComponent } from "./components/pacientes/pacientes-detail-routed/pacientes-detail-routed.component";
import { ProgenitoresDetailRoutedComponent } from "./components/progenitores/progenitores-detail-routed/progenitores-detail-routed.component";
import { VisitasmedicacionViewRoutedComponent } from "./components/visitasmedicacion/visitasmedicacion-view-routed/visitasmedicacion-view-routed.component";
import { VisitaspruebasViewRoutedComponent } from "./components/visitaspruebas/visitaspruebas-view-routed/visitaspruebas-view-routed.component";
import { LoginViewRoutedComponent } from "./components/shared/login/login-view-routed/login-view-routed.component";
import { VisitasBypacienteViewRoutedComponent } from "./components/visitas/visitas-bypaciente-view-routed/visitas-bypaciente-view-routed.component";

const routes: Routes = [
    { path: '', redirectTo: 'pacientes', pathMatch: 'full' }, // Redirigir la ruta vacía a '/home'
    { path: 'home', component: AdminHomeComponent }, // Ruta para cargar AdminHomeComponent
    { path: 'pacientes', component: PacientesViewRoutedComponent }, // Ruta para cargar PacientesViewRouted
    { path: 'visitas', component: VisitasViewRoutedComponent }, // Ruta para cargar VisitasViewRouted
    { path: 'calendario', component: CalendarioViewRoutedComponent }, // Ruta para cargar PacientesViewRouted
    { path: 'diagnosticos', component: DiagnosticoViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'medicaciones', component: MedicacionViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'medidas', component: MedidasViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'progenitores', component: ProgenitoresViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'pruebas', component: PruebasViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'seguros', component: SeguromedicoViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'pacientes/nuevo', component: PacientesNewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'pacientes/editar/:id', component: PacientesEditRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'diagnosticos/nuevo', component: DiagnosticosNewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'diagnosticos/editar/:id', component: DiagnosticosEditRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'medicaciones/nuevo', component: MedicacionNewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'medicaciones/editar/:id', component: MedicacionEditRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'medidas/nuevo', component: MedidasNewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'medidas/editar/:id', component: MedidasEditRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'progenitores/nuevo', component: ProgenitoresNewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'progenitores/editar/:id', component: ProgenitoresEditRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'visitas/nuevo', component: VisitasNewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'visitas/editar/:id', component: VisitasEditRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'pruebas/nuevo', component: PruebasNewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'pruebas/editar/:id', component: PruebasEditRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'pacientes/ver/:id', component: PacientesDetailRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'progenitores/ver/:id', component: ProgenitoresDetailRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'visitasmedicacion', component: VisitasmedicacionViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'visitaspruebas', component: VisitaspruebasViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'login', component: LoginViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
    { path: 'visitas/paciente/:id', component: VisitasBypacienteViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

