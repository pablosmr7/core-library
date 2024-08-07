import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from '../../components/layout/layout.component';

import { navBarRoutes } from '../../interfaces/layout/navbarRoutes';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  bgColor: string = 'rgb(0, 100, 255)';
  color: string = 'white';
  navBar: boolean = true;
  title: string = 'core-library';

  routes: navBarRoutes[] = [
    {
      label: 'home',
      internalRoute: '',
    },
    {
      label: 'creditos',
      internalRoute: 'credits',
    },
  ];
}
