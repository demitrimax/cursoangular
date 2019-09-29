import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})

export class FrutaComponent {
  nombre_componente = 'Componente de fruta';
  listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  nombre:string;
  public edad:number;
  public mayordeEdad:boolean;
  public trabajos:Array<any> = ['Carpintero', 44, 'Fontanero'];

  comodin:any;

  constructor() {
    //El constructor para establecer propiedades
      this.nombre = 'Moises Aguilar Mendoza';
      this.edad = 38;
      this.mayordeEdad = false;
      this.comodin = 'Cualquier cosa';


  }

  ngOnInit(){
    //ngOnInit para llamar funciones
    this.cambiarNombre();
    this.cambiarEdad(28);
    this.holaMundo(this.nombre + ' ' +this.edad);

    //variables y alcances
    var uno = 8;
    var dos = 15;

    if( uno === 8){
      let uno = 3; //el alcance de la variable es dentro del bloque o dentro del if
      var dos = 88; //el alance de la variable es global
      console.log('dentro del if: ' + uno + ' ' + dos);
    }
    console.log('fuera del if: ' + uno + ' ' + dos);
  }
  holaMundo(nombre){
    console.log('Hola Mundo '+nombre);
  }
  cambiarNombre()
  {
    this.nombre = "Fabian Aguilar";
  }
  cambiarEdad(edad)
  {
    this.edad = edad;
  }
}
