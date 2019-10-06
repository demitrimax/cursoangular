import {Component} from '@angular/core';
import {Empleado}  from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html'
})

export class EmpleadosComponent{
  titulo = 'Componente empleado';

  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public micolor:string;
  public color_seleccionado:string;

  constructor() {
    this.empleado = new Empleado('David López', 45, 'Cocinero', true);
    this.trabajadores = [
      new Empleado('Moises Aguilar', 38, 'Programador', false),
      new Empleado('Ivan Aquino', 28, 'Lider de Proyecto', true),
      new Empleado('Roberto Castillo', 61, 'Asistente', false),
    ];

    this.trabajador_externo = true;
    this.micolor = "blue";
    this.color_seleccionado = "#CCC";

  }

  ngOnInit()
  {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado() {
    console.log(this.color_seleccionado);
  }

}
