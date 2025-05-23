import { Location } from '@angular/common';
import {
  NgDocRootComponent,
  NgDocNavbarComponent,
  NgDocSidebarComponent,
} from '@ng-doc/app';
import { Component, HostBinding, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'twngelements-docs';

  protected readonly location = inject(Location);

  @HostBinding('attr.data-ng-doc-is-landing')
  get isLandingPage(): boolean {
    return this.location.path() === '';
  }
}
