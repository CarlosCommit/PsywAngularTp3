export class Ticket {
    id!:number;
    dni!:string;
    precioReal!:number;
    tipo!:string;
    fechaCobro!:Date;
    precioCobrado!:number;

   /* constructor(dni:string,precioReal:number,tipo:string,precioCobrado:number)
    {
        this.id=0;
        this.dni=dni;
        this.precioReal=precioReal;
        this.tipo=tipo;
        this.fechaCobro=new Date();
        this.precioCobrado=precioCobrado;
        
    }*/
    constructor()
    {
        this.precioCobrado=0;
    }
}
