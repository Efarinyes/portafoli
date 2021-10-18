import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Producto } from '../interface/productos.interface';
// import { ProductoDesc } from '../interface/producto-desc.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  carregant = true
  productos: Producto[] = []
  productoFilter: Producto[] = []
 
  

    constructor( private http: HttpClient) { 
              this.cargarProductos() 
            }
    private cargarProductos() {

      return new Promise( ( resolve, reject) => {

        this.http.get<Producto[]>('https://portafoli-angular-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')

               .subscribe( (resp: Producto[] ) => {
                   this.productos = resp
                   this.carregant = false
                   resolve(resp)
               })
      })
      
  }

  getProducto( id: string) {
     return this.http.get(`https://portafoli-angular-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`);
                 
  }

  cercarProducte( terme: string) {

    if ( this.productos.length === 0 ) {
      // Esperar a carregar productes
          this.cargarProductos().then( () => {
        // executar després de carregar productes
        // aplicar filtre
            this.filtrarProducte(terme)
          }) 
    } else {
      // aplicar filtre de cerca
        this.filtrarProducte(terme)
    }
  }
  private filtrarProducte( terme: string) {

       // console.log(this.productos)
        this.productoFilter = []
        terme = terme.toLocaleLowerCase()



        this.productos.forEach( prod => {
      
          const tituloLower = prod.titulo.toLocaleLowerCase()


          if ( prod.categoria.indexOf(terme) >= 0 || tituloLower.indexOf(terme) >= 0 ) {
            this.productoFilter.push(prod)
          }
         
        })

  }
}