import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-parametro',
  templateUrl: './home-parametro.component.html',
  styleUrls: ['./home-parametro.component.css']
})
export class HomeParametroComponent implements OnInit {
  parametros:any;
  constructor(private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this.parametros = parametros;
        console.log('Estos parametros me llegaron',this.parametros);
        console.log('Id parametros',this.parametros.idAmigo);
      });
  }

}
