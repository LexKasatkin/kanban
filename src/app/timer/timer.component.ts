import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Timer} from './timer';
import {Task} from '../models/task';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input()
  task: Task;

  timer: Timer;

  constructor() {
    this.timer = new Timer();
  }

  ngOnInit() {
    this.timer.timerId = (setInterval(() => this.setDeltaTime(), 1000));
  }

  ngOnDestroy(): void {
    clearInterval(this.timer.getTimerId());
  }

  setDeltaTime() {
    this.timer.setTimeAfterCreateTask(
      new Date(new Date().getTime() - this.task.getTimeCreateTask().getTime()));
  }
}
