import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMedia } from './calcular-media/calcular-media';
import { Apolice } from './apolice/apolice';
import { ConversorDeTemperatura } from './conversor-de-temperatura/conversor-de-temperatura';
import { Imc } from './imc/imc';

const routes: Routes = [
  {path: 'CalcularMedia', component: CalcularMedia},
  {path: 'Apolice', component: Apolice},
  {path: 'CoversorDeTemperatura', component: ConversorDeTemperatura},
  {path: 'CalcularIMC', component: Imc}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
