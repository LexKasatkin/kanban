export class Timer {
  private timeBeforeCreateTask: number;
  timerId: number;
  timeCreateTask: Date;

  constructor(timeCreateTask: Date) {
    this.timeCreateTask = timeCreateTask;
  }


  getTimeCreateTask(): Date {
    return this.timeCreateTask;
  }

  getTimeBeforeCreateTask(): number {
    return this.timeBeforeCreateTask;
  }

  setTimeBeforeCreateTask(value: number) {
    this.timeBeforeCreateTask = value;
  }

  getTimerId(): number {
    return this.timerId;
  }

  setTimerId(value: number) {
    this.timerId = value;
  }
}
