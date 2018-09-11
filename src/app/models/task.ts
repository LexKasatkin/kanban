export class Task {
  id: number;
  name: string;
  description: string;
  executor: string;
  priority = 1;
  timeCreateTask: Date;
  stageId: number;

  constructor(title: string, description: string, executor: string, priority: number, timeCreateTask: Date) {
    this.name = title;
    this.description = description;
    this.executor = executor;
    this.priority = priority;
    this.timeCreateTask = timeCreateTask;
  }

  getTimeCreateTask(){
    return this.timeCreateTask;
  }
}
