import { Component } from '@angular/core';
import { Suma } from './suma';
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  miSuma:Suma;
  title = 'PrimeraClase';
  constructor(){
    this.miSuma= new Suma();
  }
}
