import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  @Input() inicio: string = '<'; // Definindo uma variável de entrada para o nome
  @Input() fim: string = '/>'; // Definindo uma variável de entrada para o nome
}
