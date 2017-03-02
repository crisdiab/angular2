import {Injectable} from '@angular/core';

@Injectable()
export class MasterURLService {

  private _url: string = 'http://localhost:1337/'

  constructor() {
    // this._url = 'https://c9.io'
    // this._url = 'https://c9.io'  }
  }
  getUrl(){
    return this._url;
  }
}

