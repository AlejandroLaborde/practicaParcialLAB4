import { Injectable } from '@angular/core';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos = [
    new Producto(1,'descrp1','tipo1','26/04/1995',123,'assets/images/1.jpg'),
    new Producto(2,'descrp2','tipo2','26/04/1995',123,'assets/images/1.jpg'),
    new Producto(3,'descrp2','tipo2','26/04/1995',123,'assets/images/1.jpg'),
   ]

  constructor() { 
    
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
