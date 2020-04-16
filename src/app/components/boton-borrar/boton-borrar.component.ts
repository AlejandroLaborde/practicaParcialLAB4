import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

  @Input() elementoAEliminar: Producto;

  constructor( private productosService: ProductosService) { }

  ngOnInit() {
  }

  eliminar(){
   this.productosService.eliminarProducto(this.elementoAEliminar.id);
  }
}
