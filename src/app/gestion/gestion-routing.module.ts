import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';
import { ListTicketComponent } from './components/list-ticket/list-ticket.component';
import { RegistroTicketsComponent } from './components/registro-tickets/registro-tickets.component';

const routes: Routes = [
  {path:"formulario/:id", component:FormTicketComponent},
  {path:"lista", component:ListTicketComponent},
  {path:"", redirectTo:'lista',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
