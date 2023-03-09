import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from '../models/task.model';
import { getTasks } from './mock.data';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  // BehaviorSubject permite guardar los datos que le indiquemos, y luego queda disponible para todos los elementos que lo utilicen.
  tasks$: BehaviorSubject<Task[]>;

  constructor() {
    const initialTasks: Task[] = [];

    this.tasks$ = new BehaviorSubject(initialTasks);

    getTasks().then((tasks) => this.tasks$.next(tasks));
    // De esta manera toma las tareas haciendo un get.
    // Luego a través del next deja disponible las tareas para todos los elementos que lo llamen/utilicen.
    // Como si fuese actualizar un state.
  }

  greetings() {
    console.log('Hola');
  }
}
