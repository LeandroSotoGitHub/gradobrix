import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MENU_DATA, Producto } from 'src/app/Data/menu';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  producto: Producto | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoria = params.get('categoria');
      const slug = params.get('slug');

      if (categoria && slug && MENU_DATA[categoria]) {
        const lista = MENU_DATA[categoria];
        this.producto = lista.find(p => p.slug === slug) || null;
      }
    });
  }
}
