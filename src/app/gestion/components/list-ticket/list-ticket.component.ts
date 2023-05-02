import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketServiceService } from '../../services/ticket-service.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  registros!:Array<Ticket>;
  totalLocal!:number; 
  totalExtranjeros!:number;
  totalVentas!:number;


  constructor(private ticketService:TicketServiceService) {

    this.registros=ticketService.getRegistros();

   }

  ngOnInit(): void {
  }

public borrarTicket(ticket:Ticket):void
{
  this.ticketService.eliminarRegistro(ticket);
  this.cargarResumen()
}

public cargarResumen()
{
  let registros = this.registros;
  this.totalLocal= this.getCantidadLocal();
  this.totalExtranjeros=this.getCantidadExtranjeros();
  this.totalVentas = registros.length; 
}

private getCantidadLocal() {

  return this.registros.filter(item=>item.tipo==="l").length;
  
}
private getCantidadExtranjeros() {

  return this.registros.filter(item=>item.tipo==="e").length;
  
}




}
