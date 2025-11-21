import { Ingrediente } from "../ingrediente";
import { IngredienteReceta } from "../ingredienteReceta";

export class Receta{
    caloriasTotales: number=0;
    receta: IngredienteReceta[]=[];

    constructor(){  
        this.caloriasTotales=0;
        this.receta=[];
    }

      agregarIngrediente(ing: Ingrediente) {
        
        let ingredienteReceta: IngredienteReceta= new IngredienteReceta(1,ing.id, ing.nombre,  ing.descripcion, ing.calorias, ing.img);
        const existe = this.receta.find(ir => ir.id === ing.id);
        if (existe) {

          this.duplicarIngrediente(ingredienteReceta);
          
        }
        else{
        this.receta.push(ingredienteReceta);
        this.caloriasTotales += ing.calorias;}
      }

      duplicarIngrediente(ing: IngredienteReceta) {
        ing.mas();
        this.caloriasTotales += ing.calorias;
      }

      eliminarIngrediente(ing: IngredienteReceta) {
        const index = this.receta.findIndex(ir => ir.id === ing.id);
        if (index !== -1) {
          const ingredienteReceta = this.receta[index];
          this.caloriasTotales -= ingredienteReceta.calorias * ingredienteReceta.getCantidad();
          this.receta.splice(index, 1);
        }}
}