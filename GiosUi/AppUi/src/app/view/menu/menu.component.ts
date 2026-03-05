import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LeftMenuItems } from './left-menu.item';

@Component({
  selector: 'menu-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  open = false;
}
