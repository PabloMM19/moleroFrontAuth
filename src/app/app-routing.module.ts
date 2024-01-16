import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./components/home/admin-home/admin-home.component";
import { PacientesViewRoutedComponent } from "./components/pacientes/pacientes-view-routed/pacientes.view.routed.component";
import { VisitasViewRoutedComponent } from "./components/visitas/visitas-view-routed/visitas.view.routed.component";
import { CalendarioViewRoutedComponent } from "./components/calendario/calendario-view-routed/calendario.view.routed.component";
import { DiagnosticoViewRoutedComponent } from "./components/diagnosticos/diagnostico-view-routed/diagnostico-view-routed.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirigir la ruta vacía a '/home'
    { path: 'home', component: AdminHomeComponent }, // Ruta para cargar AdminHomeComponent
    { path: 'pacientes', component: PacientesViewRoutedComponent }, // Ruta para cargar PacientesViewRouted
    { path: 'visitas', component: VisitasViewRoutedComponent }, // Ruta para cargar VisitasViewRouted
    { path: 'calendario', component: CalendarioViewRoutedComponent }, // Ruta para cargar PacientesViewRouted
    { path: 'diagnosticos', component: DiagnosticoViewRoutedComponent }, // Ruta para cargar DiagnosticosViewRouted
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

