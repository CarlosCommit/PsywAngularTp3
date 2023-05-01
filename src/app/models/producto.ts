export class Producto {
    id:number;
    nombre:string;
    descripcion:string; 
    img:string;
    precio:number;
    constructor(nombre:string,descripcion:string,img:string,precio:number,id:number)
    {
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.img=img;
        this.precio=precio; 
        this.id = id;
    }
}
