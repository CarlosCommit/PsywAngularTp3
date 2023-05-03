import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  registros!:Array<Ticket>;
  constructor() {

    this.registros=[
      {id:1,dni:"43889665",precioReal:200, tipo:"l",fechaCobro: new Date(), precioCobrado: 200},
      {id:2,dni:"43889125",precioReal:320, tipo:"l",fechaCobro: new Date(), precioCobrado: 320},
      {id:3,dni:"43889422",precioReal:100, tipo:"e",fechaCobro: new Date(), precioCobrado: 100},
      {id:4,dni:"42319665",precioReal:700, tipo:"e",fechaCobro: new Date(), precioCobrado: 500},
      {id:5,dni:"53139665",precioReal:600, tipo:"l",fechaCobro: new Date(), precioCobrado: 400},
      {id:6,dni:"43319643",precioReal:400, tipo:"l",fechaCobro: new Date(), precioCobrado: 100},
      {id:7,dni:"43964565",precioReal:300, tipo:"e",fechaCobro: new Date(), precioCobrado: 150},
    ]
   }

   public getRegistros():Array<Ticket>
   {
    return this.registros; 
   }

   public eliminarRegistro(ticket:Ticket):void{
    const index = this.registros.findIndex(item => item.id === ticket.id);
    this.registros.splice(index,1); 
   }

   public guardarRegistro(ticket:Ticket):void{
    ticket.id=this.registros[(this.registros.length-1)].id+1;
    this.registros.push(ticket);
   }

   public getRegistro(id:number):any{

   let original = this.registros.find(registro=>registro.id==id);
   return Object.assign({}, original);
   }

   public editarRegistro(ticket:Ticket):void
   {
    let index = this.registros.findIndex(registro => registro.id == ticket.id);
    this.registros[index] = Object.assign({}, ticket);

   }
}
