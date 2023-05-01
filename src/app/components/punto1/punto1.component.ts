import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  productos: Array<Producto>;
  carrito: Array<Item>;
  total!: number;

  constructor() {
    this.productos = [
      { id: 1, nombre: "notebook asus1", descripcion: "desc1", img: "img1", precio: 20 },
      { id: 2, nombre: "notebook asus2", descripcion: "desc2", img: "img2", precio: 21 },
      { id: 3, nombre: "notebook asus3", descripcion: "desc3", img: "img3", precio: 22 }
    ];
    this.carrito = [];
  }

  ngOnInit(): void {
  }

  addToCart(producto: Producto) {
    const item = this.carrito.find(item => item.producto.id === producto.id);
    item ? item.cantidad += 1 : this.carrito.push(new Item(producto, 1));
    this.calculate();
  }

  calculate(): void {
    this.total = this.carrito.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
  }

  verificar(item: Item): void {
    this.calculate();
    (item.cantidad == 0) ? alert("eliminar") : console.log("nada");
  }

}
