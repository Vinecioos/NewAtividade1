import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-de-temperatura',
  standalone: false,
  templateUrl: './conversor-de-temperatura.html',
  styleUrl: './conversor-de-temperatura.css',
})
export class ConversorDeTemperatura {

  celcius : number = 0;
  Fahrenheit : number = 0;
  kelvin : number = 0;

  converter(){
     this.Fahrenheit = (this.celcius * 9 / 5) +32
     this.kelvin = this.celcius + 273.15
  }
}
