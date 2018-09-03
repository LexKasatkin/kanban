import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Timer} from './timer';
import {Task} from '../task';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input()
  task: Task;

  constructor() {
  }

  ngOnInit() {
    console.log('MY TIMER');
    console.log(this.task.timer);
    this.task.timer.timerId = (setInterval(() => this.setDeltaTime(), 1000));
  }

  ngOnDestroy(): void {
    clearInterval(this.task.getTimer().getTimerId());
  }

  setDeltaTime() {
    this.task.timer.setTimeAfterCreateTask(
      new Date(new Date().getTime() - this.task.getTimer().timeCreateTask.getTime()));
  }

  getTimer() {
    return this.task.getTimer();
  }
}
