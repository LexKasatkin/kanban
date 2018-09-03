import {Timer} from './timer/timer';

export class Task {
  title: string;
  description: string;
  executor: string;
  priority = 1;
  timer: Timer;
  private moving: boolean;

  constructor(title: string, description: string, executor: string, priority: number, timer: Timer) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.executor = executor;
    this.timer = timer;
  }

  getTimer() {
    return this.timer;
  }

  setMoving(moving: boolean) {
    this.moving = moving;
  }

  getMoving() {
    return this.moving;
  }
}
