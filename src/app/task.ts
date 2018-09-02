export class Task {
  title: string;
  description: string;
  executor: string;
  priority = 1;
  startTime: Date;

  constructor(title: string, description: string, executor: string, priority: number, startTime: Date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.executor = executor;
    this.startTime = startTime;
  }
}
