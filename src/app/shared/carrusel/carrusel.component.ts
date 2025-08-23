import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})

export class CarruselComponent implements OnInit, OnDestroy {
 @Input() images: string[] = [];
  @Input() alt = '';
  @Input() interval = 3000;
  @Input() loop = true;
  @Input() autoplay = true;

  index = 0;

  private startX = 0;
  private currentX = 0;
  private dragging = false;
  private timer: any = null;
  private threshold = 50;

  @ViewChild('track', { static: false }) trackRef!: ElementRef<HTMLDivElement>;
  private trackEl!: HTMLDivElement;

  constructor() {}

  ngOnInit(): void {
    if (this.autoplay) this.startAutoplay();
  }

  ngAfterViewInit(): void {
    this.trackEl = this.trackRef?.nativeElement;
    this.resetTranslate();
  }

  ngOnDestroy(): void { this.stopAutoplay(); }

  // Autoplay
  startAutoplay() { this.stopAutoplay(); this.timer = setInterval(() => this.next(), this.interval); }
  stopAutoplay() { if (this.timer) { clearInterval(this.timer); this.timer = null; } }

  // Controles
  goTo(i: number) { if (!this.images?.length) return; this.index = (i + this.images.length) % this.images.length; this.resetTranslate(); }
  prev() { this.goTo(this.index - 1); }
  next() { this.goTo(this.index + 1); }

  // Accesibilidad (teclado)
  @HostListener('keydown.arrowLeft', ['$event']) onLeft(e: KeyboardEvent) { e.preventDefault(); this.prev(); this.restartAutoplayIfNeeded(); }
  @HostListener('keydown.arrowRight', ['$event']) onRight(e: KeyboardEvent) { e.preventDefault(); this.next(); this.restartAutoplayIfNeeded(); }

  // Touch/Pointer
  onPointerDown(ev: PointerEvent | TouchEvent) {
    this.dragging = true;
    this.stopAutoplay();
    this.startX = this.getClientX(ev);
    this.currentX = this.startX;
  }
  onPointerMove(ev: PointerEvent | TouchEvent) {
    if (!this.dragging || !this.trackEl) return;
    this.currentX = this.getClientX(ev);
    const delta = this.currentX - this.startX;
    const pct = (delta / (this.trackEl.clientWidth || 1)) * 100;
    this.trackEl.style.transition = 'none';
    this.trackEl.style.transform = `translateX(calc(${-100 * this.index}% + ${pct}%))`;
  }
  onPointerUp() {
    if (!this.dragging) return;
    const delta = this.currentX - this.startX;
    this.resetTranslate();
    if (Math.abs(delta) > this.threshold) delta < 0 ? this.next() : this.prev();
    this.dragging = false;
    this.restartAutoplayIfNeeded();
  }

  private getClientX(ev: any): number {
    return ev.touches?.[0]?.clientX ?? ev.changedTouches?.[0]?.clientX ?? ev.clientX ?? 0;
  }
  private resetTranslate() {
    if (!this.trackEl) return;
    this.trackEl.style.transition = 'transform 300ms ease';
    this.trackEl.style.transform = `translateX(${-100 * this.index}%)`;
  }
  private restartAutoplayIfNeeded() { if (this.autoplay) this.startAutoplay(); }
}
