import { Component } from '@angular/core';
import { CategoriaTransaccion } from './model/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-wallet-angular';
  categoria:CategoriaTransaccion = {nombre:'Food', valor: 666, fechaUltimaTransaccion:'12/12/2022'};


  getCategoriasTransacciones():Array<CategoriaTransaccion> {
    return [
      {
        nombre: '',
      }
    ];
  }

  guardarCategoriaTransaccion(categoria:CategoriaTransaccion) {

  }
}
