import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stage} from '../models/stage';
import {Task} from '../models/task';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  @Input()
  stage: Stage;

  @Input()
  moveForwardEnabled: boolean;

  @Input()
  moveBackEnabled: boolean;

  @Output()
  moveForward: EventEmitter<Task> = new EventEmitter<Task>();

  @Output()
  moveBackward: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() {

  }

  ngOnInit() {
  }

  createTask(task: Task) {
    this.stage.tasks.push(task);
  }

  onForward($event: Task) {
    this.filterTask($event)
    this.moveForward.emit($event);
  }

  onBackward($event: Task) {
    this.filterTask($event)
    this.moveBackward.emit($event);
  }

  filterTask($event) {
    this.stage.tasks = this.stage.tasks.filter(value => value !== $event);
  }
}
