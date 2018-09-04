import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Task} from '../task';
import {Timer} from '../timer/timer';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  @Input()
  task: Task;

  @Input()
  moveEnabled: boolean;
  @Input()
  moveBackEnabled: boolean;
  @Output()
  moveTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output()
  moveBooleanTask: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  moveAhead(moving: boolean) {
    this.moveBooleanTask.emit(moving);
    this.moveTask.emit(this.task);
  }

  ngOnDestroy() {
  }
}
