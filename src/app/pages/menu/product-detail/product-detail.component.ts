import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MENU_DATA, Producto } from 'src/app/Data/menu';
import { ScrollAnimationService } from 'src/app/services/scroll-animation.service';
import { WhatsappService } from 'src/app/services/whatsapp.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, AfterViewInit {
  producto: Producto | null = null;
  activeTab = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private whatsappService: WhatsappService,
    private scrollAnimation: ScrollAnimationService
  ) {}

  /** Devuelve las keys de los precios por grupo (docena, unidad, etc.) */
  getPriceKeys(priceObj: { [key: string]: string }): string[] {
    return Object.keys(priceObj);
  }

  /** Imágenes seguras para el carrusel (sin null/undefined/'') */
  get imagesForCarousel(): string[] {
    const base = this.producto?.gallery?.length
      ? this.producto!.gallery
      : [this.producto?.imageUrl, this.producto?.hoverImageUrl];

    return (base || []).filter((s): s is string => !!s && s.length > 0);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoria = params.get('categoria');
      const slug = params.get('slug');

      if (categoria && slug && MENU_DATA[categoria]) {
        const lista = MENU_DATA[categoria];
        this.producto = lista.find(p => p.slug === slug) || null;

        if (!this.producto) {
          this.router.navigate(['/menu']);
        } else if (this.producto.tabGroups?.length) {
          this.activeTab = this.producto.tabGroups[0].label.toLowerCase();
        }
      } else {
        this.router.navigate(['/menu']);
      }
    });
  }

  ngAfterViewInit(): void {
    this.scrollAnimation.observeElements();
  }

  abrirWhatsapp(): void {
    this.whatsappService.abrirWhatsapp();
  }
}
