import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: false,
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css',
})
export class CalcularMedia {

  ac1 : number = 0;
  ac2 : number = 0;
  ag : number = 0;
  af : number = 0;

  resultado : number = 0

  nota : string = ''

calcular(){
   this.resultado = ((this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag *0.10) + (this.af *0.45))

   if(this.resultado >= 5){
      this.nota = 'Passou'
   }else{
    this.nota = 'Reprovado'
   }
}




}
