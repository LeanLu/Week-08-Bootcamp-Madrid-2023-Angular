import { Component } from '@angular/core';
import { MenuItems } from 'projects/users2/src/types/menu.items';

@Component({
  selector: 'isdi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  items: MenuItems[];

  // Los nombres de "path" son los que definimos en el routing de app.
  constructor() {
    this.items = [
      { path: 'home', label: 'Inicio' },
      { path: 'tasks', label: 'Tareas' },
      { path: 'about', label: 'Nosotros' },
    ];
  }
}
