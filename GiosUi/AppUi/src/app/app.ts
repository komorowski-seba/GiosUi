import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';

import { MenuComponent } from './view/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, TuiRoot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
