export class Timer {
  private readonly interestingEvent: Date;
  timeBeforeTheEvent: Date;
  timerId: number;

  constructor(interestingEvent: Date) {
    this.interestingEvent = interestingEvent;
    this.timeBeforeTheEvent = new Date();
  }


  getInterestingEvent(): Date {
    return this.interestingEvent;
  }

  getTimeBeforeTheEvent(): Date {
    return this.timeBeforeTheEvent;
  }

  getTimerId(): number {
    return this.timerId;
  }
}
