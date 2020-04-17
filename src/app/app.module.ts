import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { BotonBorrarComponent } from './components/boton-borrar/boton-borrar.component';
import { BusquedaProductoComponent } from './components/busqueda-producto/busqueda-producto.component';
import { MuestraProductoComponent } from './components/muestra-producto/muestra-producto.component';
 
@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ErrorComponent,
    HomeComponent,
    TablaProductosComponent,
    BotonBorrarComponent,
    BusquedaProductoComponent,
    MuestraProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
