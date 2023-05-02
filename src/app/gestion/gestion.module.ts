import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';
import { ListTicketComponent } from './components/list-ticket/list-ticket.component';
import { RegistroTicketsComponent } from './components/registro-tickets/registro-tickets.component';
import { FormsModule } from '@angular/forms';
import { FormatPipe } from './pipes/format.pipe';
import { MonedaPipe } from './pipes/moneda.pipe';



@NgModule({
  declarations: [
    FormTicketComponent,
    ListTicketComponent,
    RegistroTicketsComponent,
    FormatPipe,
    MonedaPipe
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    FormsModule
    
  ]
})
export class GestionModule { }
