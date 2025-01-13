import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true, // Tornando o componente independente
  imports: [CommonModule], // Adicionando CommonModule
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  // Lista de imagens
  images: string[] = [
    'assets/java.png',
    'assets/typescript.png',
    'assets/js.png',
    'assets/dart.png',
    'assets/delphi.png',

    'assets/angular.png',
    'assets/springboot.png',

    'assets/css.png',
    'assets/html.png',

    'assets/mysql.png',
    'assets/postgresql.png',

    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
    'assets/typescript.png',
  ];
}
