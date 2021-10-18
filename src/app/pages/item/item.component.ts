import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
// import { ProductoDesc } from '../../interface/producto-desc.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    
  producto: any
  id!: string;
  

  constructor( private route: ActivatedRoute, public produtoService: ProductosService ) { }

  ngOnInit(): void {
      this.route.params
          .subscribe( params => {

              this.produtoService.getProducto(params['id'])
              .subscribe( (producto: any) => {
                // console.log(params['id'])
                // console.log(producto)
                this.id = params['id'];
                this.producto = producto
                
              })
          })
    
  }

}
