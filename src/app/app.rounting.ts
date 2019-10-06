import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes
import {EmpleadosComponent} from './empleados/empleados.component';
import {FrutaComponent} from './fruta/fruta.component';

const appRoutes: Routes = [
  {path: '', component:EmpleadosComponent},
  {path: 'empleado', component:EmpleadosComponent},
  {path:'fruta', component:FrutaComponent},
  {path: '**', component:EmpleadosComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
