import { Component, Input, output, OnChanges, SimpleChanges } from '@angular/core';
import { Receta } from './receta';
import { IngredienteReceta } from '../ingredienteReceta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css',
  standalone: false
})
export class RecetaComponent  {
  

  
  @Input() receta: Receta= new Receta();


  readonly ingredienteEliminado = output<IngredienteReceta>();

  eliminar(ing: IngredienteReceta) {
    this.ingredienteEliminado.emit(ing);
  } 

  readonly agregarIngrediente = output<IngredienteReceta>();

  duplicar(ing: IngredienteReceta) {
    this.agregarIngrediente.emit(ing);
  }

  

 


}
