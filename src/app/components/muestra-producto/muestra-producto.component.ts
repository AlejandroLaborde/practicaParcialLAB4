import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-muestra-producto',
  templateUrl: './muestra-producto.component.html',
  styleUrls: ['./muestra-producto.component.css']
})
export class MuestraProductoComponent implements OnInit {

  @Input() productoAMostrar: Producto;
 
  constructor() { }

  ngOnInit() {
    this.productoAMostrar=null;
  }

}
