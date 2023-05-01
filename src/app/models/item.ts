import { Producto } from "./producto";

export class Item {
    producto: Producto;
    cantidad: number;

    constructor(producto: Producto, cantidad: number) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}
