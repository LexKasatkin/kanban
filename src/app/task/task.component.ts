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

  @Output()
  moveTask: EventEmitter<Task> = new EventEmitter<Task>();
  moveTimer: Timer;

  constructor() {
  }

  ngOnInit() {
    this.moveTimer = this.task.timer;
  }

  moveAhead() {
    this.moveTask.emit(this.task);
  }

  ngOnDestroy() {
  }
}
