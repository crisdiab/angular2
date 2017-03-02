import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {MasterURLService} from "./master-url.service";

@Injectable()
export class AlbumApiService {
  url:string;
  modelo:string = 'Album';
  constructor( private _http:Http,
                private _masterURL:MasterURLService) {
    this.url = this._masterURL.getUrl();
  }

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
