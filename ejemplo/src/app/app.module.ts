import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ArtistaApiService} from "./artista-api.service";
import {AlbumApiService} from "./Services/album-api.service";
import { HomeComponent } from './Home/home/home.component';
import { HomeParametroComponent } from './Home/home-parametro/home-parametro.component';
import {RutasAppModule} from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeParametroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RutasAppModule
  ],
  providers: [
    ArtistaApiService,
    AlbumApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
