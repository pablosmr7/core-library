import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { navBarRoutes } from '../../interfaces/layout/navbarRoutes';

@Component({
  selector: 'core-layout',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @Input() bgColor: string = 'rgb(0, 100, 255)';
  @Input() color: string = 'white';
  @Input() navBar: boolean = true;
  @Input() title: string = 'Core Library';
  @Input() routes: navBarRoutes[] = [];
}
