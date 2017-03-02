import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ArtistaApiService {
  url:string = 'http://localhost:1337/';
  modelo:string = 'Artista';
  constructor( private _http:Http) { }

  get(){
    return this._http.get(this.url+this.modelo)
  }

  getOne(id){
    return this._http.get(this.url+this.modelo+id);
  }

  create(parametros){
    return this._http.post(this.url+this.modelo,parametros);
  }

  update(parametros,id){
    return this._http.put(this.url+this.modelo+'/'+id,parametros);
  }

  delete(id){
    return this._http.delete(this.url+this.modelo+'/'+id);
  }

}
