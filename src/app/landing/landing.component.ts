import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [NgFor,RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  benefits = [
    {
      icon: 'edit',
      title: 'Diversidad de Componentes',
      description:
        'Contamos con una buena diversidad de componentes para ayudarte en el desarrollo',
    },
    {
      icon: 'file-plus',
      title: 'Integración con Microfrontend',
      description:
        'Contamos con una herramienta para que te ayude instalar en tu aplicacion de Microfrontend',
    },
    {
      icon: 'settings',
      title: 'Soporte activo',
      description:
        'Soporte continuamente activa y en desarrollo por nuestra comunidad de discord',
    },
    {
      icon: 'book',
      title: 'Diseño amigable',
      description:
        'Contamos con un diseño amigable y a la vez personalizable en cada uno de los componentes',
    },

    {
      icon: 'book',
      title: 'Diseño amigable',
      description:
        'Contamos con un diseño amigable y a la vez personalizable en cada uno de los componentes',
    },

    {
      icon: 'book',
      title: 'Diseño amigable',
      description:
        'Contamos con un diseño amigable y a la vez personalizable en cada uno de los componentes',
    },
  ];
}
