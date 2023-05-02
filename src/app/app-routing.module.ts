import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { RegistroTicketsComponent } from './gestion/components/registro-tickets/registro-tickets.component';
import { GestionRoutingModule } from './gestion/gestion-routing.module';


const routes: Routes = [
  {path:"", component:Punto1Component},
  {path:"punto2", component:Punto2Component },
  {path:"punto5", component:RegistroTicketsComponent, loadChildren: ()=> import('./gestion/gestion.module').then(m=>m.GestionModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
