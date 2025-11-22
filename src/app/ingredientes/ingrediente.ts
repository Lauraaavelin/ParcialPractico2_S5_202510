export class Ingrediente{
    id: number;
    nombre: string;
    descripcion: string;
    calorias: number;
    imagen: string;

    constructor(id: number,
    nombre: string,
    descripcion: string,
    calorias: number,
    img: string){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.calorias=calorias;
        this.imagen=img;
    }
}