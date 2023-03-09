import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'isdi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  // Definimos que el item va a ser una props y va a venir de afuera:
  @Input('item') task!: Task;
  @Output() onDelete: EventEmitter<number>;
  @Output() onChange: EventEmitter<Task>;

  constructor() {
    this.onDelete = new EventEmitter();
    this.onChange = new EventEmitter();
  }
  handleDelete() {
    console.log('Borrando', this.task.id);
    this.onDelete.next(this.task.id);
  }

  handleChange() {
    this.task.isCompleted = !this.task.isCompleted;
    this.onChange.next(this.task);
  }
}
