import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListaIngredientesComponent } from './ingredientes/lista-ingredientes/lista-ingredientes.component';
import { RecetaComponent } from './ingredientes/receta/receta.component';
@NgModule({
  declarations: [
    AppComponent,
ListaIngredientesComponent,
RecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
