import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';
import { TuiDrawer } from '@taiga-ui/layout';

import { MenuComponent } from './view/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, TuiRoot, TuiDrawer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
