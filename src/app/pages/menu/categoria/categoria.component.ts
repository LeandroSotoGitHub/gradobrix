import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MENU_DATA, Producto } from 'src/app/Data/menu';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria: string = '';
  productos: Producto[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cat = params.get('categoria');
      if (cat && MENU_DATA[cat]) {
        this.categoria = cat;
        this.productos = MENU_DATA[cat];
      } else {
        this.categoria = 'Categoría no encontrada';
        this.productos = [];
      }
    });
  }
}
