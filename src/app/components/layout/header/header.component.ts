import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'core-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() navBar: boolean = true;
  @Input() color: string = 'white';
  @Input() bgColor: string = 'blue';
  @Input() title: string = 'Core Library';

  @Output()
  public navControler = new EventEmitter<MouseEvent>();

  colorStyle: string =
    'background-color: ' + this.bgColor + '; color: ' + this.color + ';';

  public handleClick(event: MouseEvent) {
    this.navControler.emit(event);
  }

  ngOnInit() {
    this.colorStyle =
      'background-color: ' + this.bgColor + '; color: ' + this.color + ';';
  }
}
