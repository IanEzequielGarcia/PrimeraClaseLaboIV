import { Component } from '@angular/core';
import { Suma } from './suma';
import { Usuario } from './usuario';
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  miSuma:Suma;
  title = 'Garcia Ian';
  bienvenido:any;
  login:any;
  error:any;
  constructor(){
    this.miSuma= new Suma();
  }
}
