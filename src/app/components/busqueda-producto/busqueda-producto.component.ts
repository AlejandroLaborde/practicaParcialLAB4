import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent implements OnInit {

  @Output() productoEncontrado = new EventEmitter<Producto>();
  productoABuscar: Number;
  constructor( private productosService: ProductosService) { }

  ngOnInit() {
  }

  buscar(){
    if(this.productosService.obtenerProducto(this.productoABuscar)){
      this.productoEncontrado.emit(this.productosService.obtenerProducto(this.productoABuscar));
    }
  }
}
