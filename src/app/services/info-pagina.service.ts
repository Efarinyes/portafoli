import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}
  carregat = false
  equip: any[] = []

  constructor( private http: HttpClient) {

    this.carregarInfo()
    this.carregarEquip()
    
   }

   private carregarInfo() {
        this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
          this.carregat = true
          this.info = resp
          
        })
   }

   private carregarEquip() {
        this.http.get('https://portafoli-angular-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
            .subscribe( (resp: any) => {
              this.equip = resp
              // console.log(this.equip)
            })
   }
}
