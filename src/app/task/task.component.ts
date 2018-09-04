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
  moveTaskForward: EventEmitter<Task> = new EventEmitter<Task>();
  @Output()
  moveTaskBackward: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() {
  }

  ngOnInit() {
  }

  moveAhead() {
    this.moveTaskForward.emit(this.task);
  }

  moveAtail() {
    this.moveTaskBackward.emit(this.task);
  }

  ngOnDestroy() {
  }
}
