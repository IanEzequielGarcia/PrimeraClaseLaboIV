import { Component, OnInit } from '@angular/core';
import { Suma } from './suma';
import { Usuario } from './usuario';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  miSuma:Suma;
  title = 'Garcia Ian';
  bienvenido:any;
  login:any;
  error:any;
  constructor() {
    this.miSuma= new Suma();                                                
   }

  ngOnInit(): void {
  }

}
