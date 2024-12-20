import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./navbar/navbar.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  @Input() inicio: string = '<'; // Definindo uma variável de entrada para o nome
  @Input() fim: string = '/>'; // Definindo uma variável de entrada para o nome

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    // Chama a função observeImages apenas no lado do navegador
    if (isPlatformBrowser(this.platformId)) {
      // Usa uma pequena delay para garantir que a DOM foi carregada
      setTimeout(() => this.observeImages(), 0);
    }
  }

  observeImages() {
    const images = document.querySelectorAll('.image-container'); // Seleciona as imagens

    // Criando o IntersectionObserver para monitorar as imagens
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe que ativa a animação quando a imagem entra na tela
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target); // Desabilita a observação após a animação
        }
      });
    }, {
      threshold: 0.5 // Define que a animação começa quando 50% da imagem estiver visível
    });

    images.forEach(image => {
      observer.observe(image); // Começa a observar cada imagem
    });
  }


}
