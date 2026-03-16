import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperior } from './menu-superior/menu-superior';
import { CalcularMedia } from './calcular-media/calcular-media';
import { Apolice } from './apolice/apolice';
import { ConversorDeTemperatura } from './conversor-de-temperatura/conversor-de-temperatura';
import { Imc } from './imc/imc';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, MenuSuperior, CalcularMedia, Apolice, ConversorDeTemperatura, Imc],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
