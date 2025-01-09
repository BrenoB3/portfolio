import { Component, Inject, OnInit, PLATFORM_ID, AfterViewInit, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observeImages();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.addClassToContactItems();
      }, 1000);
    }
  }

  observeImages() {
    if (isPlatformBrowser(this.platformId)) {
      const images = document.querySelectorAll('.image-container');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'slide-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5
      });

      images.forEach(image => {
        observer.observe(image);
      });
    }
  }

  private addClassToContactItems() {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
      this.renderer.addClass(item, 'show');
    });
  }
}
