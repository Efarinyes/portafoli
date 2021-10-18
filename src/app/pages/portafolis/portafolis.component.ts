import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-portafolis',
  templateUrl: './portafolis.component.html',
  styleUrls: ['./portafolis.component.css']
})
export class PortafolisComponent implements OnInit {

  constructor( public productoService: ProductosService ) { }

  ngOnInit(): void {
  }

}
