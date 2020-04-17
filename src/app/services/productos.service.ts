import { Injectable } from '@angular/core';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos = [
    new Producto(1,'dulce de leche','lacteos','26/04/1995',123,'assets/images/1.jpg'),
    new Producto(2,'milanesa','carnes','26/04/1995',123,'assets/images/milanesa.jpg'),
    new Producto(3,'mermelada','dulces','26/04/1995',123,'assets/images/mermelada.jpg'),
   ]

  constructor() { 
    
  }

  obtenerProducto(id){
    return this.productos[this.obtenerIndice(id)];
  }

  obtenerProductos(): Producto[]{
    return this.productos;
  }

  eliminarProducto(indice){
    this.productos.splice(this.obtenerIndice(indice),1);
  }

  obtenerIndice( id: Number){
    let Indice;
    for (let index = 0; index < this.productos.length; index++) {
      if( id == this.productos[index].id){
        Indice = index;
      }
    }
    return Indice;
  }


}
