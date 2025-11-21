import { Component } from '@angular/core';
import { Ingrediente } from './ingredientes/ingrediente';
import { IngredientesService } from './services/ingredientes.service';
import { Receta } from './ingredientes/receta/receta';
import { IngredienteReceta } from './ingredientes/ingredienteReceta';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'frontend_examen2';

  ingredientes: Ingrediente[] = [];
  receta: Receta = new Receta();

  constructor(private service: IngredientesService) {}

  ngOnInit() {
    this.service.obtenerIngredientes().subscribe({
      next: data => this.ingredientes = data
    });
  }
  

  agregarIngrediente(ing: Ingrediente) {
    this.receta.agregarIngrediente(ing);
  }
  

  eliminarIngrediente(ing: IngredienteReceta) {
  this.receta.eliminarIngrediente(ing);
  }

  duplicarIngrediente(ing: IngredienteReceta) {
    this.receta.duplicarIngrediente(ing);
  }

}
