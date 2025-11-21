import { Component, Input, OnInit, output } from '@angular/core';
import { Ingrediente } from '../ingrediente';
import { IngredientesService } from '../../services/ingredientes.service';
@Component({
  selector: 'app-lista-ingredientes',
  templateUrl: './lista-ingredientes.component.html',
  styleUrl: './lista-ingredientes.component.css',
  standalone: false
})
export class ListaIngredientesComponent {
  

  constructor(private s: IngredientesService){}
  
  @Input() ingredientes: Ingrediente[] = [];

  readonly ingredienteSeleccionado = output<Ingrediente>();

  agregar(ing: Ingrediente) {
    this.ingredienteSeleccionado.emit(ing);
  }
  
  // Si fuera maestro detalles si seria con select y selecionado y seria algo asi
  /**
   * <app-lista (ingredienteSeleccionado)="seleccionado = $event"></app-lista>

    <app-detalle [ingrediente]="seleccionado"></app-detalle>
   */


}
