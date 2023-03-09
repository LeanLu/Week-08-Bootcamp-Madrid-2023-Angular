import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { getTasks } from '../services/mock.data';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'isdi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks: Task[];

  constructor(public srv: TasksService) {
    this.tasks = [];
  }

  // Sería como el useEffect con el Array vacío.
  // Se ejecuta cuando inicia.
  async ngOnInit(): Promise<void> {
    // Hacemos el subscribe al service para que actualice las Tasks.
    this.srv.tasks$.subscribe((data) => {
      this.tasks = data;
      console.log('Tasks', this.tasks);
    });
  }

  handleDelete(id: number) {
    this.tasks = this.tasks.filter((item) => {
      item.id !== id;
    });
  }

  handleChange(task: Task) {
    this.tasks = this.tasks.map((item) => (item.id === task.id ? task : item));
  }

  handleAdd(task: Task) {
    this.tasks.push(task);
  }
}
