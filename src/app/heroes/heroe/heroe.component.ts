import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})

export class HeroeComponent{
 nombre: string = 'Batman';
 edad: number = 60;

 get nombreCapitalizado():string{
     return this.nombre.toUpperCase();
 }

 obtenerNombre(): string {
     return `${this.nombre} - ${this.edad}`;
 }

 cambiarNombre():void{

    this.nombre = 'Albert Pujols';

 }

 cambiarEdad():void{

    this.edad = 41;

 }

}