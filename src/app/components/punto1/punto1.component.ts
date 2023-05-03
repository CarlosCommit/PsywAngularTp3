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
      { id: 1, nombre: "Asrock RX 550", descripcion: "Placa de Video Asrock Radeon RX 550 2GB GDDR5 Phantom Gaming", img: "rx550.jpg", precio: 46800 },
      { id: 2, nombre: "GALAX RTX 3080 Ti", descripcion: "Placa de Video GALAX GeForce RTX 3080 Ti 12GB GDDR6X SG 1-Click OC", img: "3080ti.jpg", precio: 382550 },
      { id: 3, nombre: "Intel Core i5 12400F", descripcion: "Procesador Intel Core i5 12400F 4.4GHz Turbo Socket 1700 Alder Lake", img: "i512400f.jpg", precio: 117199 },
      { id: 4, nombre: "AMD Ryzen 5 5600G", descripcion: "Procesador AMD Ryzen 5 5600G 4.4GHz Turbo + Wraith Stealth Cooler", img: "ryzen5600g.jpg", precio: 105000 },
      { id: 5, nombre: "AMD Ryzen 9 7900", descripcion: "Procesador AMD Ryzen 9 7900 5.4GHz Turbo AM5 + AMD Wraith Prism", img: "ryzen9.jpg", precio: 271100 },
      { id: 6, nombre: "Team DDR4 8GB", descripcion: "Memoria Team DDR4 8GB 3200MHz T-Force Vulcan Z Grey", img: "ramTeam.jpg", precio: 18950 },
      { id: 7, nombre: "Notebook ASUS X515EA", descripcion: "Notebook ASUS X515EA 15.6' FHD Core I3 1115G4 4GB 256GB SSD NVMe Freedos", img: "asusNotebook.jpg", precio: 215000 },
      { id: 8, nombre: "Notebook Dell Inspiron 3525", descripcion: "Notebook Dell Inspiron 3525 15.6' IPS FHD Ryzen 5 5625U 8GB 3200Mhz 256GB SSD NVMe", img: "dellNotebook.jpg", precio: 309990 },
      { id: 9, nombre: "SSD M.2 Gigabyte", descripcion: "Disco Sólido SSD M.2 Gigabyte 256GB 1700MB/s NVMe PCI-e", img: "nvme.jpg", precio: 13999 },
    ];
    this.carrito = [];
  }

  ngOnInit(): void {
  }

  addToCart(producto: Producto) {
    const item = this.carrito.find(item => item.producto.id === producto.id);
    item ? item.cantidad += 1 : this.carrito.push(new Item(producto, 1));
    this.calculate();

    alert("Se agrega una Unidad al carrito");
  }

  calculate(): void {
    this.total = this.carrito.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
  }

  verificar(item: Item): void {
    this.calculate();
    (item.cantidad == 0) ? alert("eliminar") : console.log("nada");
  }

}
