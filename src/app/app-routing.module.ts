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

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirigir la ruta vacía a '/home'
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
    
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

