import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name:'conversor'})

export class ConversorPipe implements PipeTransform{

  transform(valor, por){
      let valor_uno = parseInt(valor);
      let valor_dos = parseInt(por);

      let result = "La multiplicación: "+valor_uno+" x "+valor_dos+" = " + (valor_uno * valor_dos);
      return result;
  }
}
