import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./Home/home/home.component";
import {HomeParametroComponent} from "./Home/home-parametro/home-parametro.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/:idAmigo/amigos/:otroParametro', component: HomeParametroComponent}
];

export const RutasAppModule: ModuleWithProviders = RouterModule.forRoot(routes);
