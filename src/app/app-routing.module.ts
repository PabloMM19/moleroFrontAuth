import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./home/admin-home/admin-home.component";
import { PacientesViewRoutedComponent } from "./pacientes/pacientes-view-routed/pacientes.view.routed.component";
import { VisitasViewRoutedComponent } from "./visitas/visitas-view-routed/visitas.view.routed.component";
import { CalendarioViewRoutedComponent } from "./calendario/calendario-view-routed/calendario.view.routed.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirigir la ruta vacía a '/home'
    { path: 'home', component: AdminHomeComponent }, // Ruta para cargar AdminHomeComponent
    { path: 'pacientes', component: PacientesViewRoutedComponent }, // Ruta para cargar PacientesViewRouted
    { path: 'visitas', component: VisitasViewRoutedComponent }, // Ruta para cargar VisitasViewRouted
    { path: 'calendario', component: CalendarioViewRoutedComponent }, // Ruta para cargar PacientesViewRouted
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

