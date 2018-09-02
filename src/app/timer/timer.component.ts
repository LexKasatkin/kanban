import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Timer} from './timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input()
  timerOfTheComponent: Timer;

  constructor() {
  }

  ngOnInit() {
    console.log(this.timerOfTheComponent);
    this.timerOfTheComponent.timerId = (setInterval(() => this.setDeltaTime(), 1000));
  }

  ngOnDestroy(): void {
    clearInterval(this.timerOfTheComponent.getTimerId());
  }

  setDeltaTime() {
    this.timerOfTheComponent.setTimeBeforeCreateTask(new Date().getTime() - this.timerOfTheComponent.timeCreateTask.getTime());
  }

  getTimer() {
    return this.timerOfTheComponent;
  }
}
