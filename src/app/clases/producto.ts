
export class Producto{
    id : Number;
    descripcion: String;
    tipo: String;
    fechaDeVencimiento :String;
    precio: Number
    rutaDeFoto: String;

    constructor ( id: number, descripcion: String,  tipo: String,    fechaDeVencimiento :String,  precio: Number , rutaDeFoto: String){
        this.id=id;
        this.descripcion=descripcion;
        this.tipo=tipo;
        this.fechaDeVencimiento=fechaDeVencimiento;
        this.precio=precio;
        this.rutaDeFoto=rutaDeFoto;
    }

}