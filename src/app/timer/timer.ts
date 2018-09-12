export class Timer {
  timeAfterCreateTask: Date;
  timerId: number;

  constructor() {
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
