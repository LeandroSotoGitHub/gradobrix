import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {

  private observer!: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(this.onIntersection, {
      threshold: 0.1
    });
  }

  observeElements(selector: string = '.animate-on-scroll') {
    const targets = document.querySelectorAll(selector);
    targets.forEach(el => this.observer.observe(el));
  }

  private onIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }
}
