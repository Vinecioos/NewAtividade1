import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  standalone: false,
  templateUrl: './imc.html',
  styleUrl: './imc.css',
})
export class Imc {
  peso: number = 0;
  altura : number = 0;
  IMC : number = 0;
  resultado : string = "";

  calcular(){
    this.IMC = this.peso / (this.altura * this.altura);
    if(this.IMC < 18.5){
       this.resultado = "Abaixo do peso";
    }
    else if(this.IMC > 18.5 && this.IMC < 24.9){
      this.resultado = "Peso normal";
    }
    else if(this.IMC > 25 && this.IMC < 29.9){
      this.resultado = "Sobrepeso";
    }
    else if(this.IMC > 30 && this.IMC < 34.9){
      this.resultado = "Obesidade grau 1";
    }
    else if(this.IMC > 35 && this.IMC < 39.9){
      this.resultado = "Obesidade grau 2";
    }
    else{
      this.resultado = "Obesidade grau 3";
    }

  }
}
