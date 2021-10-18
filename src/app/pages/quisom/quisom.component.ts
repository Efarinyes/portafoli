import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-quisom',
  templateUrl: './quisom.component.html',
  styleUrls: ['./quisom.component.css']
})
export class QuisomComponent implements OnInit {

  constructor( public _servei: InfoPaginaService ) { }

  ngOnInit(): void {
  }

}
