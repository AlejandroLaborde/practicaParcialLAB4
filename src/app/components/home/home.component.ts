import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: Producto[];

  constructor( private productosService: ProductosService) { 
    this.productos = this.productosService.obtenerProductos();
  }

  ngOnInit() {

  }



}
