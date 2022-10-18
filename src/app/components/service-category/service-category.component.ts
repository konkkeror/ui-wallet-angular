import { Component, Input, OnInit } from '@angular/core';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { CategoriaTransaccion } from 'src/app/model/interfaces';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.scss']
})
export class ServiceCategoryComponent implements OnInit {
  faBurger = faBurger;
  @Input() categoriaTransaccion: CategoriaTransaccion = {};

  constructor() { }

  ngOnInit(): void {
  }

}
