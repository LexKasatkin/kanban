export class Timer {
  timeAfterCreateTask: Date;
  timerId: number;
  timeCreateTask: Date;

  constructor(timeCreateTask: Date) {
    this.timeCreateTask = timeCreateTask;
  }


  getTimeCreateTask(): Date {
    return this.timeCreateTask;
  }

  getTimeAfterCreateTask(): Date {
    return this.timeAfterCreateTask;
  }

  setTimeAfterCreateTask(value: Date) {
    this.timeAfterCreateTask = value;
  }

  getTimerId(): number {
    return this.timerId;
  }

  setTimerId(value: number) {
    this.timerId = value;
  }
}
