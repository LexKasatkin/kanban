import {Timer} from './timer/timer';

export class Task {
  title: string;
  description: string;
  executor: string;
  priority = 1;
  timeCreateTask: Date;
  private moving: boolean;

  constructor(title: string, description: string, executor: string, priority: number, timeCreateTask: Date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.executor = executor;
    this.timeCreateTask = timeCreateTask;
  }

  setMoving(moving: boolean) {
    this.moving = moving;
  }

  getMoving() {
    return this.moving;
  }

  getTimeCreateTask(): Date {
    return this.timeCreateTask;
  }


}
