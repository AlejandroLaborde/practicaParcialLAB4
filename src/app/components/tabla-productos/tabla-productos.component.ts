import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

  @Input() productos;

  constructor() { }

  ngOnInit() {
  }



  
}
