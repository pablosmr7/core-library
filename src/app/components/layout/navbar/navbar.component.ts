import { Component, Input, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from '../header/header.component';

import { navBarRoutes } from '../../../interfaces/layout/navbarRoutes';

@Component({
  selector: 'core-navbar',
  standalone: true,
  imports: [MatSidenavModule, HeaderComponent, RouterOutlet, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() color: string = 'red';
  @Input() navBar: boolean = true;
  @Input() bgColor: string = 'blue';
  @Input() title: string = 'Core Library';
  @Input() routes: navBarRoutes[] = [{ label: 'home', internalRoute: '/' }];

  @ViewChild('sidenav') public sidenav?: MatSidenav;

  toggle: boolean = false;
  style = 'background-color: ' + this.bgColor + '; color: ' + this.color + ';';

  ngOnInit() {
    this.style =
      'background-color: ' + this.bgColor + '; color: ' + this.color + ';';
  }

  parentHandleClick($event: MouseEvent) {
    this.toggle = !this.toggle;
    if ((this.toggle = true)) {
      this.sidenav!.open();
    } else {
      this.sidenav!.close();
    }
  }

  close() {
    this.sidenav!.close();
  }
}
