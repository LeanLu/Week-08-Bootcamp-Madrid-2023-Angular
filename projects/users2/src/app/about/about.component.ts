import { Component } from '@angular/core';
import { TasksService } from '../tasks/services/tasks.service';

// Creado con:
// ng g c about/about --project users2 --flat -t -s

@Component({
  selector: 'isdi-about',
  template: ` <p>about works!</p> `,
  styles: [],
})
export class AboutComponent {
  // Le inyectamos un service:
  constructor(public srv: TasksService) {
    this.srv.greetings();
  }
}
