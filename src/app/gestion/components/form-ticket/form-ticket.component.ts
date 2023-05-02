import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketServiceService } from '../../services/ticket-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MonedaPipe } from '../../pipes/moneda.pipe';

@Component({
  selector: 'app-form-ticket',
  templateUrl: './form-ticket.component.html',
  styleUrls: ['./form-ticket.component.css']
})
export class FormTicketComponent implements OnInit {

  ticket!:Ticket;
  accion!:string; 
 

  constructor(private ticketService:TicketServiceService, private router:Router, private activedRouter:ActivatedRoute) { 
    this.ticket=new Ticket();
  }

  ngOnInit(): void {
    this.activedRouter.params.subscribe(params=>{

      if(params['id']==0)
      this.accion="new"; 
      else
      {
        this.accion="edit";
        this.cargarTicket(params['id']);
      }

    })
  }

  public guardar():void
  { 
    this.ticket.fechaCobro=new Date(); 
    this.ticketService.guardarRegistro(this.ticket);
    this.router.navigate(['/punto5']);
  }

  public editar():void
  {
    this.ticketService.editarRegistro(this.ticket);
    this.router.navigate(['/punto5']);
  }
  private cargarTicket(id:number):void
  {
    this.ticket= this.ticketService.getRegistro(id);

  }
  public calcular()
  {
    console.log(this.ticket.precioReal +" " +this.ticket.tipo)
    console.log(this.ticket.precioReal!=null && this.ticket.tipo!=undefined)

    if(this.ticket.precioReal!=null && this.ticket.tipo!=undefined)
    {
      let precioReal = this.ticket.precioReal;
      this.ticket.precioCobrado = this.ticket.tipo=='l'? precioReal-(precioReal*0.20) : this.ticket.precioReal; 
    }else
    {
      this.ticket.precioCobrado= 0 ; 
    }
 
   
  }
}
