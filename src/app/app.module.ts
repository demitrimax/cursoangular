import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { routing, appRoutingProviders } from './app.rounting';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadosComponent } from './empleados/empleados.component';

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

import {ConversorPipe} from './pipes/conversor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
