import {Component, Renderer, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {ArtistaApiService} from "./artista-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  color: string = 'blue';
  nuevoArtista = {
  }

  public numero1: number = 2; // number
  public numero2 = 2; // any: las variables en JavaScript
  public numero3: boolean;
  public arreglo: any = []; //mismo
  public arreglo1 = []; //mismo

  private objeto: any = {
    nombre: "pene",
    apellido: ''
  }
  public artistas: any = [];


  private http: Http;

  constructor(private _http: Http,
              private _renderer: Renderer,
              private _artistaApiService: ArtistaApiService) {
    console.log('Empezo el constructor');
    this.http = _http;

  }

  ngOnInit() {
    this.objeto.nombre = 'Masacote'
    console.log('Ya esta cargada la vista');


    this._http.put('http://localhost:1337/Artista/1', {
      nombre: new Date().toDateString() + 'Valles verga',
      paisResidencia: 'Chile',
      estilo: 'Reggaetton'
    }).subscribe(
      (res) => {
        console.log(res.json());
      },
      (err) => {
        console.log(err);
      }
    )


    this._http
      .get('http://localhost:1337/Artista')
      .subscribe(
        (res: Response) => {
          console.log(res);
          this.artistas = res.json();
          console.log(res.json());
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('completed')
        }
      );
    //factory.query
    // se populan los datos de la vista
  }


  agregarMrAlPrincipio(nombre: string) {
    console.log(`Mr. ${nombre}`);
  }

  otraFuncion(nombre, apellido: string) {
    console.log(this._renderer);
    console.log(this.http);
    console.log(this._http);
    return `Mr. ${nombre}${apellido}`
  }

  crearSebas() {
    this._artistaApiService.create({
      nombre: 'Sebitas',
      paisResidencia: 'Chile',
      estilo: 'Reggaetton'
    }).subscribe(
      (res) => {
        console.log(res.json());
        this.artistas.push(res.json());
      },
      (err) => {
        console.log(err);
      }
    )



  }

  crearArtista(){
    this._artistaApiService.create(this.nuevoArtista)
      .subscribe(
        (res)=>{
          this.artistas.push(res.json());
          this.nuevoArtista = {};
        },
        (err)=>{
          console.log(err)
        }
      )
  }


}
