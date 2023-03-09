import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'isdi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  isDisplayForm: boolean;
  newTaskForm: FormGroup;
  @Output() onAdd: EventEmitter<Task>;

  constructor(public fb: FormBuilder) {
    // Para inicializar el evento (ponerlo a escuchar):
    this.onAdd = new EventEmitter();
    this.isDisplayForm = false;
    this.newTaskForm = fb.group({
      // Se coloca un valor por defecto tipo string.
      // Puede estar dentro de un Array donde en la 2da posición hay otro Array que son las validaciones.
      // Puede tener validaciones async. Por ejemplo, verificar si el usuario se encuentra en la base de datos a medida que se va completando los datos.
      title: ['Nueva tarea', [Validators.required]],
      owner: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    const newTask: Task = {
      id: 3,
      title: this.newTaskForm.value.title,
      owner: this.newTaskForm.value.owner,
      isCompleted: false,
    };
    this.onAdd.next(newTask);
    // Para limpiar el formulario al hacer Submit:
    this.newTaskForm.reset();
  }
}
